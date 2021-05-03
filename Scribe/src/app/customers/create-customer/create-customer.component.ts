import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
 
  constructor(private customerService: CustomerService) { }
 
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
  }
 // let pdfName = 'tax_report';
  //var doc = new jsPDF();
  //doc.text("Hello World", 10, 10);
  //doc.save(pdfName + '.pdf');


}
 
