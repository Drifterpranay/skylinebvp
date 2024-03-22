import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  isLoggedIn: boolean = false;
  username: string = '';

  constructor() { }

  ngOnInit(): void {
    // You can fetch user details from a service
    // For now, let's assume a dummy username
    this.username = 'JohnDoe';
    this.isLoggedIn = true;
  }
}
