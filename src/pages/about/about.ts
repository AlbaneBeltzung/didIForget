import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Reminder} from "../../models/reminder";
import { AlertController } from 'ionic-angular';
import {Log} from "../../models/log";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public name:string="";
  private items: Reminder []=[];
  private logs: Log []=[];

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
      let temp=JSON.parse(localStorage.getItem('items'));
      let temp2=JSON.parse(localStorage.getItem('logs'));
      if(temp!=null){
        this.items=temp;
      }
      if(temp2!=null){
        this.logs=temp2;
      }
  }
  createNew(){
    console.log("pushing")
    this.items.unshift(new Reminder(this.name));
    localStorage.setItem('items', JSON.stringify(this.items));
    this.name="";
  }
  checkOut(){
    let temp= false;
    let temp2;
    for(let i of this.items){
      if(i.checked==false){
        temp=true
      }
    }

    if(temp){
      temp2= this.alertCtrl.create({
        title: 'WAIT!!! Go Back you forgot something',
        subTitle: 'Close everything and try again. I believe in you',
        buttons: ['OK']
      });
      this.showAlert(temp2);
    }else {
      for (let i of this.items) {
        i.checked = false;
      }
      temp2= this.alertCtrl.create({
        title: 'Congrats! You are free to go',
        subTitle: 'You have closed and turned off everything! Enjoy your day!',
        buttons: ['OK']
      });
      let mydate=new Date;
      let mydatefinal=mydate.getDate()+"."+mydate.getMonth()+"."+mydate.getFullYear()+" at "+mydate.getHours()+":"+mydate.getMinutes();
      this.logs.unshift(new Log(mydatefinal.toString()));
      console.log(this.logs);
      localStorage.setItem('logs',JSON.stringify(this.logs));
      this.showAlert(temp2);
    }
  }
  deleteAll(){
    localStorage.removeItem('items');
    this.items=[];
  }
  showAlert(temp2) {


    let alert =temp2
    alert.present();
  }
  checkbox(item:Reminder){
    item.checked=!item.checked;
  }


}
