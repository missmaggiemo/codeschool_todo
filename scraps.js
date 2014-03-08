// script scraps


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
