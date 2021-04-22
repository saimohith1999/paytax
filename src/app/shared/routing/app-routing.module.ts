
import { DropdownComponent } from './../../components/dropdown/dropdown.component';

import { Section80CCDComponent } from './../../components/section80-ccd/section80-ccd.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import{FormComponent} from 'src/app/components/form/form.component'

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { CreateCustomerComponent } from '../../customers/create-customer/create-customer.component';
import { CustomersListComponent } from '../../customers/customers-list/customers-list.component';
import {CustomersList80DComponent} from '../../customers-80d/customers-list80d/customers-list80d.component'
import {TaxComponent } from '../../customers/tax/tax.component';
import{UserprofileComponent} from '../../components/userprofile/userprofile.component';
import{SectionComponent} from '../../components/section/section.component';
import {recomComponent} from  '../../components/recom-form/recom-form.component';
import {Section80CComponent} from  '../../components/section-80c/section-80c.component';
import {SectionDComponent} from '../../components/section-d/section-d.component';
import { AuthGuard } from "../../shared/guard/auth.guard";
import { EmployeeProfilesComponent } from 'src/app/components/employee-profiles/employee-profiles.component';
import{CompanyPageComponent} from 'src/app/components/company-page/company-page.component';
import {CreateCustomer80DComponent} from '../../customers-80d/create-customer80d/create-customer80d.component';
const routes: Routes = [
  { path: '', redirectTo: '/company-page', pathMatch: 'full'},
  {path:'company-page',component:CompanyPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path:'employee-profiles',component:EmployeeProfilesComponent},
  { path: 'reports-c', component: CustomersListComponent },
  { path: 'reports-d', component: CustomersList80DComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'register-form', component: FormComponent },
  {path:'profile',component:UserprofileComponent},
  {path:'section',component:SectionComponent},
 {path: 'recom-form',component:recomComponent},
{path:'section-80c',component:Section80CComponent},
{path:'section-80ccd',component:Section80CCDComponent},
{path:'section-80d',component:SectionDComponent},
{path:'dropdown',component:DropdownComponent},
{path:'addsection80-d',component:CreateCustomer80DComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
