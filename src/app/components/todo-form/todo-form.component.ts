import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { v4 as uuidV4 } from 'uuid';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string = '';
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const newTodo : Todo = {
      id: uuidV4(),
      title: this.todoTitle,
      date: new Date(),
      isComplete: false
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle = '';
  }

}
