import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { matchs } from '../shared/match.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {
  getMatchList:matchs[]= [];
error:string[]=[];
 matchsUrl="https://localhost:7009/api/Matchs/GetMatchs/";
 createUrl="https://localhost:7009/api/matchs/postMatchs";
  constructor(private http:HttpClient) { }
   getMatchs(){
    this.http.get(this.matchsUrl).subscribe( {
      next: res=>{
        console.log(res);
           this.getMatchList=res as matchs[];
     },
      error:er=>  {
      this.error.push(er.error);
      }
   })
   }



   refreshList ()
   {
    this.http.get(this.matchsUrl).subscribe( {
   next: res=>{
        this.getMatchList=res as matchs[];
  },
   error:er=>  {alert(er.error.message)}
})
 }

 postMatchs( ) :Observable<matchs[]>
 {
    return this.http.post<matchs[]>(this.createUrl,this.getMatchList);
 }



}
