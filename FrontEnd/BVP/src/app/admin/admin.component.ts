import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  allemps:any
  constructor(private empser:ServiceService){
  }
  
  ngOnInit(): void {
    {this.empser.getAllUser().subscribe((data:any)=>{ 
      this.allemps=data;  console.log(data)
    });}
  }

  employee:any=
  [{id:101,name:"pranay",salary:1000,DOJ:"04-06-2023",email:"pranay123@gmail.com",password:"12345678",gender:'male',exp:"",location:"India"},
  {id:102,name:"bhasha",salary:1000,DOJ:"06-04-2022",email:"bhasha123@gmail.com",password:"12345678",gender:'male',exp:"",location:"United States of America"},
  {id:103,name:"utkarsh",salary:1000,DOJ:"04-06-2022",email:"utkarsh123@gmail.com",password:"12345678",gender:'male',exp:"",location:"India"},
{id:104,name:"pydiraju",salary:1000,DOJ:"04-06-2024",email:"pydiraju123@gmail.com",password:"12345678",gender:'male',exp:"",location:"Germany"},
{id:105,name:"shivachakrith",salary:1000,DOJ:"04-06-2021",email:"shivachakrith123@gmail.com",password:"12345678",gender:'female',exp:"",location:"Canada"}];
}
  
  // deleteBook(userId: any) {
  //   this.service.deleteUser(userId).subscribe(
  //     (data: any) => {
  //       // If deletion is successful, remove the user from the array
  //       this.user = this.user.filter((user: any) => user.id !== userId);
  //       console.log("User deleted successfully", data);
  //     },
  //     (error: any) => {
  //       console.error("Error deleting user:", error);
  //       // Handle error, e.g., display an error message to the user
  //     }
  //   );
  // }
  
  

