import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}
  get isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin;
  }
  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
