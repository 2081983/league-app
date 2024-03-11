import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResultService } from 'src/app/services/result.service';
import { matchs } from 'src/app/shared/match.model';
import { result } from 'src/app/shared/result.model';

@Component({
  selector: 'app-reslutform',
  templateUrl: './reslutform.component.html',
  styleUrls: ['./reslutform.component.css']
})
export class ReslutformComponent implements OnInit {
  constructor(public serv:ResultService,private toastr:ToastrService,private fb:FormBuilder){}
  @Input() match!:matchs
ngOnInit(): void {
this.resForm=this.fb.group({
  id:[this.match.id,],
  fteam:[this.match.fTeamId],
  seceam:[this.match.secTeamId],
  groupId:[''],
  FScore:['',[Validators.required,Validators.min(0)]],
  SecScore:['',[Validators.required,Validators.min(0)]]
});


}
resForm!:FormGroup;

// ngAfterContentChecked(): void {

// }

errorMessages:string[]=[];





onSubmit(){

 // alert(this.resForm.controls["id"].value);
this.checkValidation(this.resForm);
this.resForm.controls["id"].setValue(this.match.id);
this.resForm.controls["fteam"].setValue(this.match.fTeamId);
this.resForm.controls["seceam"].setValue(this.match.secTeamId);
this.resForm.controls["groupId"].setValue(this.match.id);
     this.serv.postReult(this.resForm.value).subscribe({
       next:res=>{
      //   console.log(res);

          this.toastr.success("Successfully Savd","Successfully Inserted");
          this.serv.getMatchs();
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



private checkValidation(fg:FormGroup)
{

 Object.keys(fg.controls).forEach(field=>{
  const control =fg.get(field);
  if(control instanceof FormControl)
  {
    control.markAsDirty({onlySelf:true});
  }else if(control instanceof FormGroup)
  {
   this.checkValidation(control);
  }
 })
}



}


