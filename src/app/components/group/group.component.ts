import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { group } from 'src/app/shared/group.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent  implements OnInit {
  constructor(public serv:GroupsService,private tostr:ToastrService){}
  list:group[]=[];

  ngOnInit(): void {
    this.serv.refreshList();
  }
  update(gr:group ){
  this.serv.formData= Object.assign({},gr);
  }

  delete(id:number){
    if(confirm("Are You Sure You Want To Delete This Group?"))
    {
      this.serv.deleteGroup(id).subscribe({
        next:res=>{
          console.log(res);
          this.serv.list=res as group[];
          this.tostr.error("Successfully deleted","Successfully saved");

        },
        error:er=>{console.log(er.error.message)}
       });

    }

  }
}
