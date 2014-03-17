# scraps.py

class TodoHandler(Handler):
    def get(self):
        item = TodoItem.all().get()
        if item:
          dict = {'description': item.description, 'status': item.status.upper(), 'id': item.id}
          data = json.dumps(dict)
          log_record(data)
          self.write(data)





class TodoHandler(Handler):
    def get(self):
        if id:
            item = TodoItem.get_by_id(id)
            if item:
              dict = {'description': item.description, 'status': item.status.upper(), 'id': item.id}
              data = json.dumps(dict)
              log_record(data)
              self.write(data)
