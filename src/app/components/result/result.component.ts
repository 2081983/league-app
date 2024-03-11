import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResultService } from 'src/app/services/result.service';
import { matchs } from 'src/app/shared/match.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  implements OnInit {
constructor(public serv:ResultService,private toaster:ToastrService, private changeDetector: ChangeDetectorRef){}
  ngOnInit(): void {
   this.serv.getMatchs();
  }




  matchs:matchs[]=[];
   div="";

}
