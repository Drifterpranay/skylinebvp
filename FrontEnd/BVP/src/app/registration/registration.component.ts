import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router:Router,private service:ServiceService){}
  
  registerUser(form:any){
    console.log(form)
      if(form.name === ''|| form.email === '' || form.password === '' || form.dob === '' || form.country === ''){
        console.error("registration failed",Error);
        alert("registration unsucessful")
      }
      else if(form != ''){
        this.service.register(form).subscribe((Response:any)=>{
        console.log("registration sucessful",Response);
        this.service.SetUserLoggedIn();
        this.router.navigate(['Home'])
        alert("registration sucessful")
      },
          (error: any) =>{console.error("registration failed",error);
    alert("registration unsucessful")
  });
  }
  }
  EmailValidator(control:AbstractControl) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const value = control.value;
    if(!pattern.test(value) && control.touched) 
      return {
        emailError:true
      }
    else return null;
}
}
