# utility functions

import webapp2
import os
import jinja2

import json
import random
import string
import logging
import hashlib
import datetime
import time

from google.appengine.ext import db

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape = True)
# autoescape escapes html from user text automatically

class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))



# global variables



# utility methods

def log_record(text):
    return logging.error(text)

def sleep(n):
    return time.sleep(abs(float(n)))
