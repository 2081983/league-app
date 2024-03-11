import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { group } from '../shared/group.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient ) { }

   listUrl:string= "https://localhost:7009/api/groups/getall";
   createUrl:string= "https://localhost:7009/api/groups/addgroup";
   updateUrl:string= "https://localhost:7009/api/groups/editgroup/";
   deleteUrl:string= "https://localhost:7009/api/groups/deletegroup/";
   list:group[]=[];
   formData:group= new group();
   frmSubmitted:boolean=false;
  refreshList ()
    {
     this.http.get(this.listUrl).subscribe( {
    next: res=>{
      //console.log(res);
        this.list=res as group[];
   },
    error:er=>  {alert(er.error.message)}
 })
  }

  postGroup( ) :Observable<group[]>
  {
     return this.http.post<group[]>(this.createUrl,this.formData);
  }
  putGroup( ) :Observable<group[]>
  {
     return this.http.put<group[]>(this.updateUrl+this.formData.id,this.formData);
  }
  deleteGroup( id:number)
  {
     return this.http.delete(this.deleteUrl+id);
  }




  resetForm(frm:NgForm)
  {
    frm.form.reset();
    this.frmSubmitted=false;
    this.formData= new group();
  }
}
