import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Tasks tracker';
  showAddForm: boolean;
  subscription: Subscription;
  homeRoute: boolean;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = uiService
      .onShowToggle()
      .subscribe((value) => (this.showAddForm = value));
  }

  ngOnInit(): void {}

  toggleAddClose(): void {
    this.uiService.showHideAddForm();
  }

  isHome(route: string): boolean {
    return this.router.url === route;
  }
}
