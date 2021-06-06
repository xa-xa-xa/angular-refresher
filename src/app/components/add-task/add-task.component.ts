import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task_interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {
  };

  onSubmit() {
    if (!this.text) {
      alert("Task's text required!");
      return;
    }
    if (!this.day) {
      alert("Task's Date and Time required!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;

  }

}
