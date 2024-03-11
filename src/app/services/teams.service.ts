import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { teamm } from '../shared/team-m.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient ) { }
  listUrl:string= "https://localhost:7009/api/teams/getall";
  getteamUrl:string= "https://localhost:7009/api/teams/getteam/";
  createUrl:string= "https://localhost:7009/api/teams/addteam";
  updateUrl:string= "https://localhost:7009/api/teams/editteam/";
  deleteUrl:string= "https://localhost:7009/api/teams/deleteteam/";
  list:teamm[]=[];
  team!:teamm;
  formData:teamm= new teamm();
  frmSubmitted:boolean=false;
   refreshList ()
     {
      this.http.get(this.listUrl).subscribe( {
     next: res=>{
       //console.log(res);
         this.list=res as teamm[];
    },
     error:er=>  {alert(er.error.message)}
  })
   }
 createTeam(data:teamm)
 {
   return this.http.post<teamm[]>(`${this.createUrl}`,data );
 }
 resetTeam(frm:teamm)
 {
  this.formData.id=frm.id;
  this.formData.name=frm.name;
 }

 getTeam (id:number)
 {
  this.http.get(this.getteamUrl+id).subscribe( {
    next: res=>{
      //console.log(res);
        this.team=res as teamm;
   },
    error:er=>  {alert(er.error.message)}
})
}



  putTeam( data:teamm) :Observable<teamm[]>
  {
   return this.http.put<teamm[]>(`${this.updateUrl}`+data.id,data );
 }
 deleteTeam( id:number)
 {
    return this.http.delete(this.deleteUrl+id);
 }




}
