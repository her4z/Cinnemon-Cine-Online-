import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service'; //Importa el servicio de tareas.
import { Task } from '../Task';

@Component({
  selector: 'app-test-rest-api',
  templateUrl: './test-rest-api.component.html',
  styleUrls: ['./test-rest-api.component.css']
})
export class TestRestAPIComponent implements OnInit {
  tasks: Task[];
  title : string;

  constructor(private taskService: TasksService) { //Indica al constructor que inicie el servicio al cargar la app.
    this.taskService.getTasks() // Solicita al servicio todas las tareas.
    .subscribe(tasks => {       // Devuelve los datos y los muestra en consola
      this.tasks = tasks
    })
  }

  ngOnInit() {
  }

  addTask(event) {
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask)
    .subscribe(task => {
      this.tasks.push(task);

    });
  }

  
}
