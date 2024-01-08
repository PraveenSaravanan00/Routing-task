import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface IUserdetails{
  id:number
name:string
url:string
job:string
gender:string
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
Name:string="Praveen"
id:number=22
job:string="Web Developer"
gender:string="male"
url:string=""
userDetails:string=""
  updateValue: string="";
  userdetailsdata:IUserdetails[]=[]
  canactivatevalue:boolean=false
constructor(private routerref: Router, public route: ActivatedRoute) {
  this.updateValue = this.route.snapshot.paramMap.get("UpdateValue") as string
  localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
}
ngOnInit(){
  this.userDetails=localStorage.getItem("updateData") as string
  this.userdetailsdata=(JSON.parse(this.userDetails));
  this.userdetailsdata.forEach((state:IUserdetails):void=>{
    if(state.id==this.updateValue as unknown as number){
      this.Name=state.name
      this.id=state.id
      this.job=state.job
      this.gender=state.gender
      this.url=state.url
    }

  })
}
  back():void{
    this.canactivatevalue=true
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.routerref.navigate(["userlist"])
  }
}
