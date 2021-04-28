import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;
  countries: string[] = ['UPSTOCKS', 'MORE-INVEST', 'MONEY-WAY'];
  default: string = '';
  alert : boolean = false
  warn: boolean=true
  res:number;


  constructor(private customerService: CustomerService)
  {}

  ngOnInit() {

  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.alert=true;
    this.warn=false;

  }
  closeAlert(){
    this.alert=true;
  }

  verify(){
    this.res= this.customer.LifeInsurancePremium + this.customer.PublicProvidentFund  + this.customer.EmployeesProvidentFund + this.customer.EquityLinkedSavingsScheme + this.customer.UnitLinkedInsurancePlan + this.customer.TaxSaverFixedDeposits + this.customer.NationalPensionScheme + this.customer.HomeLoanPrincipalRepayment  + this.customer.SukanyaSamriddhiYojana  + this.customer.SeniorCitizensSavingsScheme + this.customer.NationalSavingsCertificate ;
    if(this.res <= 150000){
      return false;
    }
    else{
      return true;
    }
  }


}

 // let pdfName = 'tax_report';
  //var doc = new jsPDF();
  //doc.text("Hello World", 10, 10);
  //doc.save(pdfName + '.pdf');



