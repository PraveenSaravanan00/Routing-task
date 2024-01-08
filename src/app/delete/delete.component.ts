import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  local_data:object;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA) public data: object){
    this.local_data={...data}
 }

  deleteData():void{
    this.dialogRef.close({event:"success",data:this.local_data})
  console.log(this.local_data);
  
  }
  closeDialog():void{
    this.dialogRef.close({event:"cancel"})
  }
}
