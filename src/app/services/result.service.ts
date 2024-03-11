import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { matchs } from '../shared/match.model';
import { result } from '../shared/result.model';
import { Observable } from 'rxjs';
import { report } from '../shared/report.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor(private http:HttpClient) { }
  matchsUrl= "https://localhost:7009/api/Results/GetMatchsList/";
  postUrl= "https://localhost:7009/api/Results/addmatchres";
  reportUrl= "https://localhost:7009/api/matchs/resultreport/";
  MatchList:matchs[]= [];
  reportList:report[]= [];

  formData:result= new result();

  frmSubmitted:boolean=false;
  getMatchs(){
    this.http.get(this.matchsUrl).subscribe( {
      next: res=>{
    //    console.log(res);
          this.MatchList=res as matchs[];
     },

      error:er=>  {alert(er.error.message)}
   })
   }

   postReult(data:any)
   {
     return this.http.post<any>(`${this.postUrl}`,data );
   }


   getReport(){
   return this.http.get(this.reportUrl).subscribe( {
      next: res=>{
        console.log(res);
        this.reportList=res as report[];
     },

      error:er=>  {alert(er.error.message)}
   })
   }



}
