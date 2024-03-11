import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from 'src/app/services/groups.service';
import { group } from 'src/app/shared/group.model';

@Component({
  selector: 'app-groupform',
  templateUrl: './groupform.component.html',
  styleUrls: ['./groupform.component.css']
})
export class GroupformComponent {
   constructor(public serv:GroupsService,private toster:ToastrService ){}


   myErr= null;
   errorMessages:string[]=[];
   onSubmit(form:NgForm)
   {
    this.errorMessages=[];
    this.serv.frmSubmitted=true;
    if(form.valid){
  if(this.serv.formData.id==0)
  {
    this.insertGroup(form);
  }else{
    this.updateGroup(form);
  }

    }
  }

  insertGroup(form:NgForm )
  {
    this.serv.postGroup().subscribe({
      next:res=>{
        console.log(res);
        this.serv.list=res as group[];
        this.serv.resetForm(form);
        this.toster.success("Successfully Savd","Successfully Inserted");

      },
      error:er=>{
           if(er.error.errors)
      {
            this.errorMessages=er.error.errors;
      }else{
        this.errorMessages.push(er.error)
      }
      }


     });
  }
  updateGroup(form:NgForm )
  {
    this.serv.putGroup().subscribe({
      next:res=>{
        console.log(res);
        this.serv.list=res as group[];
        this.serv.resetForm(form);
        this.toster.info("Successfully Savd","Successfully Updated");

      },
      error:er=>{console.log(er.error.message)}
     });
  }

 resetFrm(form:NgForm){
  this.serv.resetForm(form);
 }

}
