import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from "../../services/ui.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();

  }

}
