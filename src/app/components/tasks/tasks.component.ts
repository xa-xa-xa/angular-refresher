import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task_interface';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks(); // static from file
    this.taskService
      .getTasks()
      .subscribe(tasks => this.tasks = tasks); // as an Observable from file
  }

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task) => this.tasks.push(task));
  }
  deleteTask(task: Task) {
    this.taskService
      .deleteTasks(task)
      .subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService
      .updateTaskReminder(task).subscribe();
  }

}
