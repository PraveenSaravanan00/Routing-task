import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface IDetails{
  id:number
firstName:string
lastName:string
username:string
email:string
password:string
canactivatevalue:boolean
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""

  validationFirstName: string = ""
  validationLastName: string = ""
  validationEmail: string = ""
  validationPassword: string = ""
  registerData: IDetails = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    canactivatevalue: false,
    id: 0,
    username: ''
  }
  localstroageData: IDetails[] = []
  canactivatevalue:boolean=false
  
  constructor(private routerref: Router) { 
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
  }
  registerDetails():void {
    if (this.firstName.trim().replace(/\s+/g, "") === "") {
      this.validationFirstName = "Please enter the First Name"
    }
    else if(!this.firstName.trim().match(/^[a-zA-Z]+$/)){
      this.validationFirstName = "Please enter the Character"
    }
    else if (this.lastName.trim().replace(/\s+/g, "") === "") {
      this.validationFirstName = ""
      this.validationLastName = "Please enter the Last Name"
    }
    else if(!this.lastName.trim().match(/^[a-zA-Z]+$/)){
      this.validationFirstName = ""
      this.validationLastName = "Please enter the Character"
    }
    else if (this.email.trim().replace(/\s+/g, "") === "") {
      (this.validationFirstName = "", this.validationLastName = "")
      this.validationEmail = "Please  enter the Email Address"
    }
    else if(!this.email.trim().match(/[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/)){
      this.validationEmail="Enter the Valid Email Address"
    }
    else if (this.password.trim().replace(/\s+/g, "") === "") {
      (this.validationFirstName = "", this.validationLastName = "", this.validationEmail = "")
      this.validationPassword = "Please enter the Password"
    }
    else if(!this.password.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
      this.validationPassword="Create a Strong Password"
    }
    else {
      (this.validationFirstName = "", this.validationLastName = "", this.validationEmail = "", this.validationPassword = "")

      this.registerData["id"] = Math.floor((Math.random() * 999) + 1);
      this.registerData["firstName"] = this.firstName.trim().replace(/\s+/g, "")
      this.registerData["lastName"] = this.lastName.trim().replace(/\s+/g, "")
      this.registerData["username"] = this.firstName.trim().replace(/\s+/g, "") + " " + this.lastName.trim().replace(/\s+/g, "")
      this.registerData["email"] = this.email.trim().replace(/\s+/g, "")
      this.registerData["password"] = this.password.trim().replace(/\s+/g, "")
      this.localstroageData = JSON.parse(localStorage.getItem("registerData") || "[]")
      this.localstroageData.push(this.registerData)
      localStorage.setItem("registerData", JSON.stringify(this.localstroageData));
      this.canactivatevalue=true
      localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
      this.routerref.navigate(["login"])
    }

  }

  login():void {
    this.canactivatevalue=true
      localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.routerref.navigate(["login"])
  }
}
