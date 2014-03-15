// home page javascript

jQuery(document).ready(function(){

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
  });


  // this.onload = $.getJSON('/todo', function(data){
  //   var todoItem = new TodoItem(data);
  //   console.log(todoItem);
  //   var todoView = new TodoView({model: todoItem});
  //   todoView.render();
  //   console.log(todoView.el);
  //   $(".todo-item").html(todoView.el)
  // });

});
