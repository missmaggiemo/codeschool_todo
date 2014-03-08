// home page javascript

jQuery(document).ready(function(){

  this.onload = $.getJSON('/todo', function(data){
    var todoItem = new TodoItem(data);
    console.log(todoItem);
    var todoView = new TodoView({model: todoItem});
    todoView.render();
    console.log(todoView.el);
    $(".todo-item").html(todoView.el)
  });

});
