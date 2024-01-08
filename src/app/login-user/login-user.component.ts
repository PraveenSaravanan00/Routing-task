import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { IDetails } from '../register-user/register-user.component';

interface ILogindata{
  email:string
  password:string
}
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
  email:string=""
  password:string=""
  loginData:ILogindata={
    email: '',
    password: ''
  }
  validationEmail:string=""
  validationPassword:string=""
  login:string=""
  canactivatevalue:boolean=false
activeData:boolean=false
registerData:IDetails[]=[]
  constructor(private routerref:Router){
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    localStorage.setItem("activeData",JSON.stringify(this.activeData))
  }
  loginDetails():void{
    this.login=localStorage.getItem("registerData") as string
    this.registerData=(JSON.parse(this.login));
    this.registerData.forEach((state:IDetails):void=>{
      if(this.email.trim().replace(/\s+/g,"")===""  ){
        this.validationEmail="Please  enter the Email Address"
      }
      else if(state.email!==this.email){
        this.validationEmail="Enter the Correct Email Address"
      }
      
      else if (this.password.trim().replace(/\s+/g,"")===""){
        (this.validationEmail="")
      this.validationPassword="Please enter the Password"
      }
      else if(state.password!==this.password){
        this.validationPassword="Enter the Correct Password"
      }
      else{
        (this.validationEmail="",this.validationPassword="")
        this.loginData["email"]=this.email.trim().replace(/\s+/g,"")
        this.loginData["password"]=this.password.trim().replace(/\s+/g,"")
        
        this.canactivatevalue=false
        localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
        this.activeData=true
        localStorage.setItem("activeData",JSON.stringify(this.activeData))
          this.routerref.navigate(["home"])
      }
    })
   
  }
  register():void{
    this.canactivatevalue=true
    
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.routerref.navigate(["register"])
    console.log("register",this.canactivatevalue);
  }
}


