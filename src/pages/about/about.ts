import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Reminder} from "../../component/reminder";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public name:string="";
  private items: Reminder []=[];

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
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
    for(let i of this.items){
      i.checked=false;
    }
    this.showAlert();
  }
  deleteAll(){
    localStorage.clear();
    this.items=[];
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Congrats! You are free to go',
      subTitle: 'You have closed and turned off everything! Enjoy your day!',
      buttons: ['OK']
    });
    alert.present();
  }

}
