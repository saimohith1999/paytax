import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
income:number;
deduction:number;
TotaltaxableIncome:number;
Basicexemption:number;
TaxableAmount:number;
PayableTax:number;

  constructor() { }

  ngOnInit(): void {
  }

calculate(){
  this.TotaltaxableIncome=(this.income)-(this.deduction);
  this.Basicexemption=250000;
  this.TaxableAmount=this.TotaltaxableIncome-this.Basicexemption;

  if(this.TotaltaxableIncome>=0 && this.TotaltaxableIncome < 250000){
     this.PayableTax=this.TaxableAmount;
  }
  else if(this.TotaltaxableIncome>=250000 && this.TotaltaxableIncome < 500000){
     this.PayableTax=this.TaxableAmount*(0.05);
  }
  else if(this.TotaltaxableIncome>=500000 && this.TotaltaxableIncome < 750000){
    this.PayableTax=this.TaxableAmount*(0.2);
  }
  else if(this.TotaltaxableIncome>=750000 && this.TotaltaxableIncome < 1000000){
    this.PayableTax=this.TaxableAmount*(0.2);
  }
  else if(this.TotaltaxableIncome>=1000000 && this.TotaltaxableIncome < 1250000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.TotaltaxableIncome>=1250000 && this.TotaltaxableIncome < 1500000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }
  else if(this.TotaltaxableIncome>=1500000){
    this.PayableTax=this.TaxableAmount*(0.3);
  }


}
}
