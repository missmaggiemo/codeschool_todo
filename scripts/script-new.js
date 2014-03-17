// new item page scripts

jQuery(document).ready(function(){

  $('#todo-form').submit(function(event){
    event.preventDefault();
    var descrip = $('#todo-form').find('input[name=description]').val()
    var todoItem = new TodoItem();
    todoItem.set({description: descrip});
    todoItem.save();
  });

});


// need to validate description text
