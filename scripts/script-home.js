// home page javascript

var pullTodo = function(){
  var todoItem = new TodoItem();
  todoItem.url = '/todos';
  var todoView = new TodoView({model: todoItem});
  todoItem.fetch({
    success: function(collection){
      // console.log(collection.toJSON());
      todoView.render();
      $('.todo-list').html(todoView.el);
    }
  });
};

var htmlNewItemForm = "<div class='new-item'><div class='form'><form id='todo-form' method='post'><label for='description'>What do you need to do?</label><input type='text' name='description' value=''><input type='submit' name='submit' value='Add it to the list.'></form></div></div>";

jQuery(document).ready(function(){

  $(this).ready(function(){
    pullTodo();
  });

  $('#new').click(function(event){
    event.preventDefault();
    $(".todo-item").html(htmlNewItemForm);

    $(".todo-item").find('#todo-form').submit(function(event){
      event.preventDefault();
      var descrip = $('#todo-form').find('input[name=description]').val()
      todoItem = new TodoItem();
      todoItem.set({description: descrip});
      todoItem.save();
      console.log(todoItem.get('id'));
      todoView = new TodoView({model: todoItem});
      todoView.render();
      $(this).closest('.todo-list').html(todoView.el);
    });

  });

});
