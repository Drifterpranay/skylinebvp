import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   
  isUserLoggedIn:boolean;
  loginStatus : Subject<any>;

  isAdminLoggedIn:boolean;
  adminStatus : Subject<any>;
  //httpClient: any;
  post:any;
  constructor(private Http:HttpClient) {
    this.isUserLoggedIn = false;
    this.loginStatus= new Subject();

    this.isAdminLoggedIn= false;
    this.adminStatus= new Subject();
   }
   
  getUserLoggedStatus():any{
    return this.loginStatus.asObservable();
  }
  SetUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }
  SetUserLoggedOut(){
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }

  getAdminLoggedStatus():any{
    return this.adminStatus.asObservable();
  }
  SetAdminLoggedIn(){
    this.isAdminLoggedIn = true;
    this.adminStatus.next(true);
  }
  SetAdminLoggedOut(){
    this.isAdminLoggedIn = false;
    this.adminStatus.next(false);
  }


  getAllCountries():Observable<any>{
    return this.Http.get('http://restcountries.com/v3.1/all');
  }

  register(form:any){
    return this.Http.post('http://localhost:8085/register',form);
  }

  login(form: any): any{
    let url=('http://localhost:8085/login/' + form.email + "/" + form.password)
    return this.Http.get(url);
  }
    
  deleteEmployee(name: any): any {
    return this.Http.delete('https://localhost:8085/deleteUser/' + name)
  }

  getAllUser(): any {
    let url=('https://localhost:8085/showAllUser')
    return this.Http.get<any[]>(url);
  }
}



// export class EmpService {

//   isUserLoggedIn:boolean;
//   //httpClient: any;
//   post:any;

//   constructor(private Http:HttpClient) { 
//     this.isUserLoggedIn = false;
//   }


  // getUserLoggedStatus():boolean{
  //   return this.isUserLoggedIn;
  // }
  // SetUserLoggedIn(){
  //   this.isUserLoggedIn = true;
  // }
  // SetUserLoggedOut(){
  //   this.isUserLoggedIn = false;
  // }

  // getAllCountries():Observable<any>{
  //   return this.Http.get('http://restcountries.com/v3.1/all');
  // }

  // register(form:any){
  //   return this.Http.post('http://localhost:8085/register',form);
  // }

//   login1(form:any){
//    return this.Http.get('http://localhost:8085/showUserByEmail/{email}',form);
//     //return this.http.get('http://localhost:9090/showUserByPassword/{password}');
//   }

//   login(form: any): any{
//     //let url = 'https://localhost:8085/login/' + form.email + "/" + form.password;
//     // console.log('url: ' + url); // working
//     //return this.Http.post('',url);

//     return this.Http.get('https://localhost:8085/login/' + form.email + "/" + form.password).toPromise();
//   }

// deleteEmployee(name: any): any {
//   return this.Http.delete('https://localhost:8085/deleteUser/' + name)
// }


  
// }

