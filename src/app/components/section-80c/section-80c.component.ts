import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
const { jsPDF } = require("jspdf");
@Component({
  selector: 'app-section-80c',
  templateUrl: './section-80c.component.html',
  styleUrls: ['./section-80c.component.css']
})
export class Section80CComponent implements OnInit {

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
}
