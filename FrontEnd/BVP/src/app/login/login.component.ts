import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  customer:any;
  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router:Router,private service:ServiceService,private http:HttpClient){}

  loginValidate( form:any){
    console.log(form);
      if(form.email =='' || form.password ==''){
        console.log('Invalid Email: '+form.Email);
        alert("invalid login credinsals");
       }
       else if("admin123@gmail.com"==form.email && form.password== "admin123"){
        console.log("Admin Login Sucessful");
        console.log('Email: '+form.email);
        alert (" Admin Login Sucessfull")
        this.service.SetAdminLoggedIn();
        this.router.navigate(['Admin']);
       }
      //  else if("employee123@gmail.com"==form.email && form.password== "employee123"){
      //   console.log("Employee Login Sucessful");`
      //   console.log('Email: '+form.email);
      //   alert (" Employee Login Sucessfull")
      //   this.service.SetUserLoggedIn();
      //   this.router.navigate(['Home']);
      //  }
      else{
        //let url=('https://localhost:8085/login/' + form.email + "/" + form.password)
       // const apidata = ajax(url)
        {this.service.login(form).subscribe((Response:any): void=> {
        (form.email == Response.email && form.password == Response.password);{
            alert ("Welcome On Board "+Response.name)
          console.log("User Login Sucessful",Response);
          this.service.SetUserLoggedIn();
          this.isLoggedIn = true;
          this.router.navigate(['User']);
          }
        }),(error:any): void =>{
          console.error("login failed",Error);
            alert("login unsucessful")
        }
      }
      }
      //  else {
      //     this.service.login(NgForm).subscribe((Response:any): void =>{
      //     if(form.email === Response.email && form.password === Response.password){
          // alert ("Welcome On Board "+form.name)
          // console.log("User Login Sucessful",Response);
          // this.service.SetUserLoggedIn();
          // this.router.navigate(['Home']);
      //     }
      //     else {
      //       console.error("login failed",Error);
      //         alert("login unsucessful")
      //     }
      //   });
      // }
      }
      
}
//this.employees.forEach((emp:any) => {

//-----------------------with static data connected and working----------------------------//
  // employee:any = {};
  // // dependency injecton
  // constructor(private router:Router,private service:EmpService){
  //       //this.Email="pranay@123"
  //       //this.password="pranay"
  //      // this.Email="admin@123"
  //      // this.password="admin"
  //      this.employee=[
  //       {id:101,name:"pranay",salary:1000,DOJ:"04-06-2023",email:"pranay123@gmail.com",password:"12345678",gender:'male',exp:"",location:"India"},
  //       {id:102,name:"bhasha",salary:1000,DOJ:"06-04-2022",email:"bhasha123@gmail.com",password:"12345678",gender:'male',exp:"",location:"United States of America"},
  //       {id:103,name:"utkarsh",salary:1000,DOJ:"04-06-2022",email:"utkarsh123@gmail.com",password:"12345678",gender:'male',exp:"",location:"India"},
  //       {id:104,name:"pydiraju",salary:1000,DOJ:"04-06-2024",email:"pydiraju123@gmail.com",password:"12345678",gender:'male',exp:"",location:"Germany"},
  //       {id:105,name:"shivachakrith",salary:1000,DOJ:"04-06-2021",email:"shivachakrith123@gmail.com",password:"12345678",gender:'female',exp:"",location:"Canada"}];
  // }

  // loginValidate( form:any){
  //   console.log(form);
  //   if(form.email === '' || form.pass === ''){
  //     console.log('Invalid Email: '+form.Email);
  //     alert("invalid login credinsals");
  //    }
  //   //console.log(this.Email);
  //    else if("admin123@gmail.com"==form.email && form.pass== "admin"){
  //     console.log("Admin Login Sucessful");
  //     console.log('Email: '+form.email);
  //     alert (" Admin Login Sucessfull")
  //     this.service.SetUserLoggedIn();
  //     this.router.navigate(['Home']);
  //    }
  //    else if("employee123@gmail.com"==form.email && form.pass== "employee"){
  //     console.log("Employee Login Sucessful");
  //     console.log('Email: '+form.email);
  //     alert (" Employee Login Sucessfull")
  //     this.service.SetUserLoggedIn();
  //     this.router.navigate(['Home']);
  //    }
  //    else {
  //     for(let emp of this.employee){
  //       if( emp.email == form.email && emp.password == form.pass){
  //       alert ("Welcome On Board "+emp.name)
  //       console.log("User Login Sucessful");
  //       this.service.SetUserLoggedIn();
  //       this.router.navigate(['Home']);
  //       break
  //       }
  //       else{
  //         console.log('Invalid Email: '+form.Email);
  //         alert("invalid login credinsals");
  //       }
  //     }  
      
  //   }
  //   //console.log('Email: '+this.Email);
  //   //console.log('Password: '+this.password);
  // }


//-----------------------------first backend connected code tested one-----------------------------\\
// {this.service.login(form).subscribe((Response:any)=>{
//   console.log("registration sucessful",Response);
//       this.service.SetUserLoggedIn();
//       this.router.navigate(['Home'])
//       //alert("registration sucessful")
// });}

//-----------------------------user page visible only if login is successful-----------------------------\\
// isLoggedIn: boolean = false;
//   username: string = '';
//   password: string = '';

//   constructor() { }

  // login(): void {
  //   // In a real application, you would make a service call to validate the login
  //   // For now, let's assume a successful login
  //   this.isLoggedIn = true;
  // }