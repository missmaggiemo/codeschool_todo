// base javascript

var TodoItem = Backbone.Model.extend();
console.log(TodoItem);

var TodoView = Backbone.View.extend({
  render: function(){
    var html = "<h3 id='description'>" + this.model.get('description') + "</h3>";
    var checkbox = "<input type='checkbox' name='description' data-id=" +this.model.get('id')+ ">";
    $(this.el).html(checkbox + html);
  }

});
console.log(TodoView);
