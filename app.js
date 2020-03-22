var app = new Vue({
  el: "#app",
  data: {
    newTodos: "",
    todoItems: []
  },
  methods: {
    addTodo: function() {
      if (this.newTodos) {
        this.todoItems.push(this.newTodos);
      }
      this.newTodos = "";
    },
    removeTodo: function(item) {
      var index = this.todoItems.indexOf(item);
      this.todoItems.splice(index, 1);
    },
    editTodo: function(item) {
      var index = this.todoItems.indexOf(item);
      var todo = this.todoItems[index];
      this.todoItems.splice(index, 1);
      this.newTodos = todo;
    },
    clearTodo: function() {
      this.todoItems = [];
    }
  }
});
