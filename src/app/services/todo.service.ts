import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { 
    this.todos = [
      {
        id: '111',
        title: 'Learn Angular',
        isComplete: false,
        date: new Date()
      },
      {
        id: '222',
        title: 'Learn Javascript',
        isComplete: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Learn React',
        isComplete: false,
        date: new Date()
      }
    ]
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateStatus(todo: Todo) {
    this.todos.map(todos => {
      if (todos.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const idxOfTodo = this.todos.findIndex((currentObj) => currentObj.id === todo.id);
    this.todos.splice(idxOfTodo, 1);
  }

}
