import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import {AngularFireStorageModule} from '@angular/fire/storage'


import { ReactiveFormsModule,FormsModule} from '@angular/forms';
// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';



// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { EmployeeProfilesComponent } from './components/employee-profiles/employee-profiles.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { TaxComponent } from './customers/tax/tax.component';
import { FormComponent } from './components/form/form.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { SectionComponent } from './components/section/section.component';
import { Section80CCDComponent } from './components/section80-ccd/section80-ccd.component';





@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    EmployeeProfilesComponent,
    CompanyPageComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    TaxComponent,
    FormComponent,
    UserprofileComponent,
    SectionComponent,
    Section80CCDComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
AngularFireStorageModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }