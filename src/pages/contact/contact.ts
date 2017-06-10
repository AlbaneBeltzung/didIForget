import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Log} from "../../models/log";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private logs: Log []=[];
  constructor(public navCtrl: NavController) {

    let temp=JSON.parse(localStorage.getItem('logs'));

    if(temp!=null){
      this.logs=temp;
    }
  }
clearAll(){
  localStorage.removeItem("logs");
  this.logs=[];
}
}
