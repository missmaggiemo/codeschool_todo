#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import jinja2
from google.appengine.ext import db

from utilities import *
import json

# models

class TodoItem(db.Model):
    description = db.StringProperty(required=True)
    status = db.StringProperty(required=True, choices=set(["incomplete", "in progress", "complete"]), default="incomplete")
    id = db.IntegerProperty()
    created_at = db.DateTimeProperty(auto_now=True)


# save_item

def save_item(description):
    new_item = TodoItem(description=description)
    new_item.put()
    new_item.id = new_item.key().id()
    new_item.put()
    log_record(str(new_item))
    log_record(new_item.id)
    sleep(0.5)


# handlers


class MainHandler(Handler):
    def get(self):
        self.render("list-home.html")


class TodoHandler(Handler):
    def get(self, id=''):
        if id != '':
            item = TodoItem.get_by_id(id)
            if item:
              dict = {'description': item.description, 'status': item.status.upper(), 'id': item.key().id(), 'link': "/todos/%s" % item.key().id() }
              data = json.dumps(dict)
              log_record(data)
              self.write(data)
        else:
            item = TodoItem.all().order('-created_at').get()
            if item:
              dict = {'description': item.description, 'status': item.status.upper(), 'id': item.key().id(), 'link': "/todos/%s" % item.key().id() }
              data = json.dumps(dict)
              log_record(data)
              self.write(data)

    def post(self):
        log_record("post on /todos called")
        description = json.loads(self.request.body)['description']
        if description:
            log_record("description found")
            save_item(description)



# class NewItemHandler(Handler):
#     def get(self):
#         self.render("new-item.html")

    # def post(self):
    #     log_record("post on /new called")
    #     log_record(self.request)
    #     description = self.request.get("description")
    #     if description:
    #         save_item(description)
    #         self.redirect("/")
    #     else:
    #         self.render("new-item.html", error=True)


class ClearHandler(Handler):
    def get(self):
        db.delete(TodoItem.all(keys_only=True))
        log_record("todo items deleted")
        self.redirect("/")



app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/todos', TodoHandler),
    (r'/todos/\d+', TodoHandler),
    # ('/new', NewItemHandler),
    ('/clear', ClearHandler)
], debug=True)
