import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
constructor(public serv:ResultService){}
  ngOnInit(): void {
    this.serv.getReport();
  }
reccount=0;

}
