import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { map } from 'rxjs/operators';

import html2canvas from 'html2canvas';
const { jsPDF } = require("jspdf");
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list80d.component.html',
  styleUrls: ['./customers-list80d.component.css']
})
export class CustomersList80DComponent implements OnInit {

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
