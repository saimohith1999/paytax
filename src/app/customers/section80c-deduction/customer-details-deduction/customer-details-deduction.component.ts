import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-details-deduction',
  templateUrl: './customer-details-deduction.component.html',
  styleUrls: ['./customer-details-deduction.component.css']
})
export class CustomerDetailsDeductionComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }
  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService
      .updateCustomer(this.customer.key, { active: isActive })
      .catch(err => console.log(err));
  }

  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }

}

