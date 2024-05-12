import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTodos(todos) {
    this.todos = todos.map((todo) => ({ ...todo, completed: false }));
  }

  toggleCompleted(index) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  getTodos() {
    return this.todos;
  }
}

const todoStore = new TodoStore();

export default todoStore;