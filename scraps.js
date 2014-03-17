// script scraps

var TodoView = Backbone.View.extend({
  tagName: 'div',
  className: 'todo-item',
  template: _.template("<input type='checkbox' name='description' data-id=<%= id %>><h3 id='description'><%= description %></h3><a href='/todos/<%= id %>'>Link</a>"),
  render: function(){
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }

});

render: function(){
  var h3 = "<h3 id='description'>" + this.model.get('description') + "</h3>";
  var checkbox = "<input type='checkbox' name='description' data-id=" +this.model.get('id')+ ">";
  var link = "<a href='/todos/"+this.model.get('id')+"'>Link</a>"
  this.$el.html(checkbox + h3);
}


$(this).ready(function(){

  var todoItem = new TodoItem();
  todoItem.url = '/todos';
  var todoView = new TodoView({model: todoItem});
  todoItem.fetch({
    success: function(collection){
      console.log(collection.toJSON());
      todoView.render();
      $(".todo-item").html(todoView.el);
    }
  });





this.onload = $.getJSON('/todo', function(data){
  var div = $(".todo-item");
  var input = "<input type='checkbox' name='description' data-id=" +data['id']+ ">";
  div.attr("data-id", 1);
  div.find("#checkbox").html(input);
  div.find("#description").text(data['description']);
});



this.onload = $.getJSON('/todo', function(data){
  var todoItem = new TodoItem(data);
  console.log(todoItem);
  var div = $(".todo-item");
  var input = "<input type='checkbox' name='description' data-id=" +todoItem.get('id')+ ">";
  div.attr("data-id", todoItem.get('id'));
  div.find("#checkbox").html(input);
  div.find("#description").text(todoItem.get('description'));
});



{urlRoot: '/todos'}






this.onload = $.getJSON('/todo', function(data){
  var todoItem = new TodoItem(data);
  console.log(todoItem);
  var todoView = new TodoView({model: todoItem});
  todoView.render();
  console.log(todoView.el);
  $(".todo-item").html(todoView.el)
});
