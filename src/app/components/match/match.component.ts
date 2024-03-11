import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatchsService } from 'src/app/services/matchs.service';
import { matchs } from 'src/app/shared/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

constructor(public mServ:MatchsService,private toster:ToastrService ){}
  ngOnInit(): void {
   this.mServ.getMatchs();

  }
  matchs:matchs[]=[];
   div="";



   insertMatchs(form:NgForm )
   {
     this.mServ.postMatchs().subscribe({
       next:res=>{
         console.log(res);
         this.mServ.getMatchList=res as matchs[];

        this.toster.success("Successfully Savd","Successfully Inserted");

      },
      error:er=>{console.log(er.error.message)}
     });

}



}
