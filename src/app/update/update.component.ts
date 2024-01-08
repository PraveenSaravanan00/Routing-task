import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface IUpdatedata{
  id:number
  name:string
  url:string
  job:string
  gender:string
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  Name: string = ""
  url: string = ""
  job: string = ""
  gender:string=""
  id!: number
  validationName: string = ""
  validationurl: string = ""
  validationJob: string = ""
  validationGender: string = ""
  addUser: IUpdatedata = {
    id: 0,
    name: '',
    url: '',
    job: '',
    gender: ''
  }
  details: IUpdatedata[] = []
  updateValue: number = 0
  updatedValue!: string 
  updatefilterValue:IUpdatedata[]=[]
  canactivatevalue:boolean=false
  constructor(private routerref: Router, public route: ActivatedRoute) {
    this.updateValue = this.route.snapshot.paramMap.get("UpdateValue") as unknown as number
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
}
  ngOnInit(){
    this.updatedValue = localStorage.getItem("updateData") || "[]"
    this.updatefilterValue = (JSON.parse(this.updatedValue));
    
    
    this.updatefilterValue.forEach((state: IUpdatedata):void => {
      if (this.updateValue == state.id) {
        this.id === state.id
          this.Name = state.name
          this.url = state.url
          this.job = state.job
          this.gender = state.gender
      }
    })
  } 
  update():void{

      if (this.Name.trim().replace(/\s+/g, "") === "") {
        this.validationName = "Please  enter the Name"
      }
      else if (this.url.trim().replace(/\s+/g, "") === "") {
        (this.validationName = "")
        this.validationurl = "Please enter the URL"
      }
      else if (!(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(this.url)) {
        (this.validationName = "")
        this.validationurl = "Please enter the correct URL"
      }
      else if (this.job.trim().replace(/\s+/g, "") === "") {
        (this.validationName = "", this.validationurl="")
        this.validationJob = "Please  enter the Job"
      }
      else if ( this.gender=="" ) {
        (this.validationName = "", this.validationurl = "", this.validationJob = "")
        this.validationGender = "Please  Choose the Gender"
      }
      else{
        (this.validationName = "", this.validationurl = "", this.validationJob = "", this.validationGender = "")
            this.addUser["id"] = Math.floor((Math.random() * 999) + 1);
            this.addUser["name"] = this.Name.trim().replace(/\s+/g, " ")
            this.addUser["url"] = this.url.trim().replace(/\s+/g, "")
            this.addUser["job"] = this.job.trim().replace(/\s+/g, " ")
            this.addUser["gender"] = this.gender
        this.updatefilterValue.forEach((state: IUpdatedata,index:number) => {
          if(state.id==this.updateValue){
            this.updatefilterValue.splice(index,1,this.addUser)
            localStorage.setItem("updateData", JSON.stringify(this.updatefilterValue)|| "[]");
            this.canactivatevalue=true
            localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
            this.routerref.navigate(["userlist"])
          }
        
      })
      if(this.updateValue==null){
        this.details = JSON.parse(localStorage.getItem("updateData") || "[]")
           this.details.push(this.addUser)      
           localStorage.setItem("updateData", JSON.stringify(this.details)|| "[]");
           this.canactivatevalue=true
           localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
           this.routerref.navigate(["userlist"])
             }
      }
      
    }
    back():void{
      this.canactivatevalue=true
      localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
      this.routerref.navigate(["userlist"])
    }
  }



  


