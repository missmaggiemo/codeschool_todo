// base javascript

var TodoItem = Backbone.Model.extend({});
console.log(TodoItem);

var TodoView = Backbone.View.extend({
  render: function(){
    var html = '<h3>' + this.model.get('description') + '</h3>';
    $(this.el).html(html);
  }

});
console.log(TodoView);
