import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Auth } from '../services/authservice';
import { Route, Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login implements OnInit {
  user = new User();
  erreur: number = 0;
  constructor(private authservice: Auth, private router: Router) { }
  ngOnInit(): void { }
  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authservice.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/']);
    else this.erreur = 1;
  }
}