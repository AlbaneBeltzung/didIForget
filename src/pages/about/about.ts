import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Reminder} from "../../component/reminder";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public name:string="";
  private items: Reminder []=[];

  constructor(public navCtrl: NavController) {
      let temp=JSON.parse(localStorage.getItem('items'));
      if(temp!=null){
        this.items=temp;
      }
  }
  createNew(){
    console.log("pushing")
    this.items.push(new Reminder(this.name));
    localStorage.setItem('items', JSON.stringify(this.items));
    this.name="";
  }
  checkOut(){
    alert("alles gelöscht");
  }
  deleteAll(){
    localStorage.clear();
    this.items=[];
  }

}
