import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recom-form',
  templateUrl: './recom-form.component.html',
  styleUrls: ['./recom-form.component.css']
})
export class recomComponent {
  currentVal=0;
  deduction=50000;
  deduction1=20000;
  basicexemption=250000;
  taxableAmount=0;


 getVal(val){
    console.warn(val);
    this.currentVal=val;
  }

}
