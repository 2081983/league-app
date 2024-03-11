import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamsService } from 'src/app/services/teams.service';
import { teamm } from 'src/app/shared/team-m.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{


constructor(public serv:TeamsService,private toster:ToastrService,private router:Router,private http:HttpClient,private fb:FormBuilder){}
teamForm!:FormGroup;
isSubmitted=false;
list:teamm []=[];
errorMessages:string[]=[];
ngOnInit(): void {
    this.serv.refreshList();
   this.teamForm=this.fb.group({
    id:[0],
    name:[null,[Validators.required,Validators.minLength(3)]],

  });
   }


   editTeam(tm:teamm){
    this.serv.formData.id=tm.id;
    this.serv.formData.name=tm.name;
   }


   reset() {
   this.teamForm.reset();
   this.teamForm.controls["id"].setValue(0);
    }
    save() {
      this.isSubmitted=true;
      if(!this.teamForm.valid){
        return;
      }else{
        let id=this.teamForm.controls["id"].value;
        if(id===0)
        {

        this.insertItem();
        }else
        {
          this.updateItem();
        }

      }
      this.serv.refreshList();
      this.reset();
      this.isSubmitted=false;
    }



   insertItem(){
    this.serv.createTeam(this.teamForm.value).subscribe({
      next:res=>{
       this.serv.list=res as teamm[];
       this.toster.success("Successfully Savd","Successfully Inserted");
      },
      error:err=>{
        if(err.error.errors)
        {
              this.errorMessages=err.error.errors;
        }else{
          this.errorMessages.push(err.error)
        }
     }});
  }

  updateItem(){
    this.serv.putTeam(this.teamForm.value).subscribe({
      next:res=>{
       this.serv.list=res as teamm[];
       this.toster.info("Successfully Savd","Successfully Updated");

      },
      error:err=>{
       console.log(err.error.message);
      }
     });
  }

  deleteItem(id: number) {
 this.serv.deleteTeam(id).subscribe(res=>{
    alert('deleted');
    this.serv.refreshList();
 })
     }


     getteamUrl:string= "https://localhost:7009/api/teams/getteam/";


x!:teamm;
    edit(id: number) {
      if(id){
        const mteam=this.serv.list.find(x=>x.id===id);
        if(!mteam) {
          return;
        }

        this.http.get(this.getteamUrl+id).subscribe(res=>{

        let x= res as teamm;
           alert ( x.id);
           this.teamForm.controls["id"].setValue(x.id);
           this.teamForm.controls["name"].setValue(x.name);
        })

      }
     }

}
