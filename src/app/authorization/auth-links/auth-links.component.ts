import { Component, OnInit } from '@angular/core';
import { AuthService } from '../resources/auth.service';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.css'],
})
export class AuthLinksComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
  loggedIn(): boolean {
    var token: any = localStorage.getItem('token');
    if(token != null){
      return true;
    }else{
      return false;
    }
    // return !this.helper.isTokenExpired(token);
  }
}
