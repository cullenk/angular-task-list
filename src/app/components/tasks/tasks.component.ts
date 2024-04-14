import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskItemComponent, CommonModule, AddTaskComponent, RouterModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

constructor(private taskService: TaskService){

}

ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
}

tasks: Task[] = [];  

deleteTask(task: Task){
  this.taskService
  .deleteTask(task)
  .subscribe(
    () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
  );
}

toggleReminder(task: Task){
  task.reminder = !task.reminder;
  this.taskService.updateTaskReminder(task).subscribe()
}

addTask(task: Task){
  this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
}

}
