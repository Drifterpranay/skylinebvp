import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  
  constructor(private service : ServiceService,private router:Router){
    this.service.SetUserLoggedOut();
    this.service.SetAdminLoggedOut();
    this.router.navigate(['login']);
  }

}