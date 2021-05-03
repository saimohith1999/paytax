import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { map } from 'rxjs/operators';

import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-customers-list-deduction',
  templateUrl: './customers-list-deduction.component.html',
  styleUrls: ['./customers-list-deduction.component.css']
})
export class CustomersListDeductionComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomers() {
    this.customerService.deleteAll().catch(err => console.log(err));
  }
  downloadpdf()
  {
  console.log('hi');
  var element= document.getElementById('table');
  html2canvas(element).then((canvas)=>{
  console.log(canvas);
  var imgData=canvas.toDataURL('image/png')
  var imgHeight=canvas.height*208/canvas.width;
  var doc = new jsPDF();
  doc.addImage(imgData,0,0,208,imgHeight);
  doc.save('tax.pdf');
  })

  }

}
