import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signupForm: NgForm;
  defaultMail = "xxx@hotmail.com";
  defaultPass = "pass";
  defaultSubs = "Advanced";
  submitted = false;
  user = {
    email: '',
    password: '',
    subscription: ''
  };

  onSubmit(){
    this.submitted = true;
    console.log(this.signupForm);
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.subscription = this.signupForm.value.subscription;

    this.signupForm.reset();
  }
}
