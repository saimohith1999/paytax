import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import{FormComponent} from 'src/app/components/form/form.component'

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { CreateCustomerComponent } from '../../customers/create-customer/create-customer.component';
import { CustomersListComponent } from '../../customers/customers-list/customers-list.component';
import {TaxComponent } from '../../customers/tax/tax.component';
import{UserprofileComponent} from '../../components/userprofile/userprofile.component';
import{SectionComponent} from '../../components/section/section.component';


import { AuthGuard } from "../../shared/guard/auth.guard";
import { EmployeeProfilesComponent } from 'src/app/components/employee-profiles/employee-profiles.component';
import{CompanyPageComponent} from 'src/app/components/company-page/company-page.component'
const routes: Routes = [
  { path: '', redirectTo: '/company-page', pathMatch: 'full'},
  {path:'company-page',component:CompanyPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path:'employee-profiles',component:EmployeeProfilesComponent},
  { path: 'reports', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'form', component: FormComponent },
  {path:'profile',component:UserprofileComponent},
  {path:'section',component:SectionComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }