import { User } from './../../common/models/user.model';
import { AuthGuardLogin } from './../../services/auth-guard-login.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loggedInUser: User;
  constructor(
    private userService: UserService,
    private authGuardLogin: AuthGuardLogin
  ) {}

  ngOnInit(): void {
    if (this.authGuardLogin.canActivate()) {
      this.loggedInUser = this.authGuardLogin.auth.currentUser;
    }
  }
}
