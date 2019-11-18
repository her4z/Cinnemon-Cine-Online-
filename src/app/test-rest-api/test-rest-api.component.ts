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
    .subscribe(tasks => {       // Devuelve los datos y los lista.
      this.tasks = tasks
    })
  }

  ngOnInit() {
  }

  addTask(event) {                  // Añade una tarea
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask)
    .subscribe(task => {
      this.tasks.push(task);
      this.title="";

    });
  }

  deleteTask(id){                 // Elimina una tarea
    const tasks = this.tasks;
    this.taskService.deleteTask(id)
    .subscribe(data => {
      const response = confirm("Seguro que deseas eliminar la tarea?")
      if(response){
        if(data.n == 1) {
          for(let i = 0; i < tasks.length; i++) {
            if(tasks[i]._id = id){
              tasks.splice(i, 1);
            }
          }
      }
      return;

      }

    });

  }

  updateTask(task: Task){
    const newTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone

    };
    this.taskService.updateTask(newTask)
    .subscribe(res =>{
      task.isDone = !task.isDone
    });
  }

  
}
