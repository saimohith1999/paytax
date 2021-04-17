import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recom-form',
  templateUrl: './recom-form.component.html',
  styleUrls: ['./recom-form.component.css']
})
export class recomComponent {
  currentVal="";



 getVal(val){
    console.warn(val);
    this.currentVal=val;
  }

}
