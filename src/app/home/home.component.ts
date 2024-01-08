import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface IHomedetails{
id?:number
name?:string
url?:string
job?:string
gender?:string
}
interface IPosition{
[key:string]:number
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  totalMember:number=0
  men:number=0
  women:number=0
  count:number=0
  userDetails:string=""
  homedata:IHomedetails[]=[]
  roleDetails!:IPosition
  details:object[]=[]
  userkeyvalue:string[]=[]
  canactivatevalue:boolean=false
  activeData:boolean=true
  role:string=""
  constructor(private routerref:Router){
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue)) 
  }
  ngOnInit(){
    this.userDetails=localStorage.getItem("updateData") as string
    this.homedata=(JSON.parse(this.userDetails));
    this. roleDetails=this.homedata.reduce((acc:IPosition,cur:IHomedetails):IPosition=>{
      this.role=cur.job as string
if(typeof acc[this.role] !== "undefined"){
  acc[this.role]++
  return acc
}else{
  acc[this.role]=1
  return acc
}
  },{})
   this.details.push(this.roleDetails) 
   this.details.forEach((state:object):void=>{
    this.userkeyvalue.push(...Object.keys(state))
  })
this.homedata.forEach((state:IHomedetails,index:number):void=>{
this.totalMember=index+1
if(state.gender=="Male"){
  this.men+=1
}
else if(state.gender=="Female"){
this.women+=1
}
})
  }
  userList():void{
    this.canactivatevalue=true
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.routerref.navigate(["userlist"])
  }
  logout():void{
    this.canactivatevalue=true
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.activeData=false
    localStorage.setItem("activeData",JSON.stringify(this.activeData))
    this.routerref.navigate(["login"])
  }
}
