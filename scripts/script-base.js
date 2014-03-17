// base javascript

var TodoItem = Backbone.Model.extend({
  urlRoot: '/todos'
});

var TodoView = Backbone.View.extend({
  tagName: 'div',
  className: 'todo-item',
  render: function(){
    var h3 = "<h3 id='description'>" + this.model.get('description') + "</h3>";
    var checkbox = "<input type='checkbox' name='description' data-id=" +this.model.get('id')+ ">";
    var link = "<a href='/todos/"+this.model.get('id')+"'>Link</a>"
    this.$el.html(checkbox + h3 + link);
  }

});
