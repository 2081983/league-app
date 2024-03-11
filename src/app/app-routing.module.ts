import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/erros/notfound/notfound.component';
import { GroupComponent } from './components/group/group.component';
import { TeamComponent } from './components/team/team.component';
import { MatchComponent } from './components/match/match.component';
import { ResultComponent } from './components/result/result.component';
import { ReportComponent } from './components/report/report.component';



const routes: Routes = [

  { path:"",redirectTo:"home",pathMatch:"full" },
  { path:"home",component:HomeComponent },
  { path:"Groups",component:GroupComponent },
  { path:"teams",component:TeamComponent },
  { path:"matchs",component:MatchComponent },
  { path:"results",component:ResultComponent },
  { path:"report",component:ReportComponent },
   { path:"teams/edit/:id",component:TeamComponent  },
  //{ path:"teams",loadChildren:()=> import('./modules/team/team.module').then((m)=>m.TeamModule), },
   { path:"**",component:NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
