import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ApparmentComponent } from './apparment/apparment.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlotComponent } from './plot/plot.component';
import { RegistrationComponent } from './registration/registration.component';
import { RentComponent } from './rent/rent.component';
import { ResidentialComponent } from './residential/residential.component';
import { TermsandServisesComponent } from './termsand-servises/termsand-servises.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { UserComponent } from './user/user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddtofavoriteComponent } from './addtofavorite/addtofavorite.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ApparmentComponent,
    LogoutComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PlotComponent,
    RegistrationComponent,
    RentComponent,
    ResidentialComponent,
    TermsandServisesComponent,
    AboutusComponent,
    ContactusComponent,
    PaymentgatewayComponent,
    UserComponent,
    AddtofavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatDialogModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


