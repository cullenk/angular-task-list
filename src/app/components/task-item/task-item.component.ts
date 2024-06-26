import { Component, OnInit, Input, input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';


//Needed to handle [ngClass] and [ngStyle]
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FaIconComponent, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
@Input() "task": Task
@Input() "color": string
@Output() "onDeleteTask" : EventEmitter<Task> = new EventEmitter()
@Output() "onToggleReminder" : EventEmitter<Task> = new EventEmitter()

faTimes = faTimes;

onDelete(task : Task){
  this.onDeleteTask.emit(task)
}

onToggle(task : Task){
  this.onToggleReminder.emit(task)
}

}
