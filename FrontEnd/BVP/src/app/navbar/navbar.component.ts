import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  loginStatus: any;
  adminStatus: any;
  constructor(private service : ServiceService){

  }
  ngOnInit(): void {
   this.service.getUserLoggedStatus().subscribe((loginStatusData: any) => {
     this.loginStatus = loginStatusData;
   });
   this.service.getAdminLoggedStatus().subscribe((adminStatusData: any) =>{
    this.adminStatus = adminStatusData;
   });
 }
}
