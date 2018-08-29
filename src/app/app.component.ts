import { Component } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wcc';
  up_icon; down_icon; isSelected; feedback; message;successMessage;
  ws_name = "Workshop on CSS and JS";
  constructor(){
    this.initializeValues()
  }
  happy(event){
    if(!this.isSelected){
       this.up_icon="fa fa-smile-o";
       this.isSelected = true;
       this.feedback = "1";
    }
  }
  notHappy(event){
    if(!this.isSelected){
       this.down_icon="fal fa fa-frown-o";
       this.isSelected = true;
       this.feedback = "0";
    }
  }
  onSubmit(){
    
    this.successMessage = "Thanks for your valuable Feedback";
    this.initializeValues()
    setTimeout(()=>{
      this.successMessage=""
    },2000)


  }
  getStatusValue(){
    return this.feedback == "" ? true : false;
  }
  initializeValues(){
    this.isSelected = false;
    this.feedback = "";
    this.message = "";
    this.up_icon="fa fa-thumbs-o-up";
    this.down_icon="fa fa-thumbs-o-down";
   
  }
}
