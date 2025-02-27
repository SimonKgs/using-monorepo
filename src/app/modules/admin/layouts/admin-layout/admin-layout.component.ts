import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApxTestkSideMenuComponent, TitleColor } from 'apx-testk-side-menu'

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, ApxTestkSideMenuComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export default class AdminLayoutComponent {

  isAuthenticated = signal(false);
  TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }
} 
