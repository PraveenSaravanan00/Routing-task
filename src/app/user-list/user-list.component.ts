import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteComponent } from '../delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { IHomedetails } from '../home/home.component';

interface IUserlist{
id:number
name:string
url:string
job:string
gender:string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userlist:string=""
  userDetail:IUserlist[]=[]
  userlistdata:IHomedetails[]=[]
  flag:boolean=false
  canactivatevalue:boolean=false
  activeData:boolean=true
 
  constructor(private routerref:Router,public dialog: MatDialog){
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
  }
 
  back():void{
    this.canactivatevalue=true
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.routerref.navigate(["home"])
  }
  logout():void{
    this.canactivatevalue=true
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
    this.activeData=false
    localStorage.setItem("activeData",JSON.stringify(this.activeData))
    this.routerref.navigate(["login"])
  }
  ngOnInit():void{
    this.userlist=localStorage.getItem("updateData") as string
    this.userDetail=(JSON.parse(this.userlist));

    
  }
  adduser():void{
    this.canactivatevalue=true
    localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
      this.routerref.navigate(["adduser"])
  }
  editButton(elementId:number):void{
    this.userDetail.forEach((state:IHomedetails):void=>{
      if(elementId==state.id){
        this.canactivatevalue=true
        localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
        this.routerref.navigate(["adduser",{UpdateValue:state.id}])
      }
      
    })
  }
  deleteButton(elementId:number):void{
    const dialogRef = this.dialog.open(DeleteComponent,{disableClose: true });
    dialogRef.afterClosed().subscribe(result=> {
      if(result.event=="success"){
        this.flag=true
    this.userDetail=this.userDetail.filter((state:IUserlist)=>state.id!==elementId)
        localStorage.setItem("updateData", JSON.stringify(this.userDetail) || "[]")    
      }
  })
  
  }
  userDetails(elementId:number):void{
    this.userDetail.forEach((state:IHomedetails):void=>{
      if(elementId==state.id){
        this.canactivatevalue=true
        localStorage.setItem("guardvalue",JSON.stringify(this.canactivatevalue))
        this.routerref.navigate(["userdetails",{UpdateValue:state.id}])
      }
      
    })

  }
  }

