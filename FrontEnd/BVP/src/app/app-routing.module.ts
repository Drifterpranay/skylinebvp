import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PlotComponent } from './plot/plot.component';
import { RegistrationComponent } from './registration/registration.component';
import { RentComponent } from './rent/rent.component';
import { ResidentialComponent } from './residential/residential.component';
import { TermsandServisesComponent } from './termsand-servises/termsand-servises.component';
import { ApparmentComponent } from './apparment/apparment.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { UserComponent } from './user/user.component';
import { AddtofavoriteComponent } from './addtofavorite/addtofavorite.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'Register',component:RegistrationComponent},
  {path:'plot',component:PlotComponent},
  {path:'Rent',component:RentComponent},
  {path:'Residential',component:ResidentialComponent},
  {path:'Appartment',component:ApparmentComponent},
  {path:'TnS',component:TermsandServisesComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Site',component:AboutusComponent},
  {path:'Contactus',component:ContactusComponent},
  {path:'Payment',component:PaymentgatewayComponent},//canActivate:[AuthGuard]
  {path:'User',component:UserComponent},
  {path:'Add',component:AddtofavoriteComponent},
  {path:'plot/User',component:UserComponent},
  {path:'plot/User/Payment',component:PaymentgatewayComponent,canActivate:[AuthGuard]},
  {path:'plot/User/Add',component:AddtofavoriteComponent},
  {path:'Rent/User',component:UserComponent},
  {path:'Rent/User/Payment',component:PaymentgatewayComponent,canActivate:[AuthGuard]},
  {path:'Rent/User/Add',component:AddtofavoriteComponent},
  {path:'Residential/User',component:UserComponent},
  {path:'Residential/User/Payment',component:PaymentgatewayComponent,canActivate:[AuthGuard]},
  {path:'Residential/User/Add',component:AddtofavoriteComponent},
  {path:'Appartment/User',component:UserComponent},
  {path:'Appartment/User/Payment',component:PaymentgatewayComponent,canActivate:[AuthGuard]},
  {path:'Appartment/User/Add',component:AddtofavoriteComponent},
  {path:'Admin/logout',component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








