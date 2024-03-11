import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/erros/notfound/notfound.component';
import { GroupComponent } from './components/group/group.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupformComponent } from './components/group/groupform/groupform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgClass } from '@angular/common';
import { TeamComponent } from './components/team/team.component';
import { MatchComponent } from './components/match/match.component';
import { ResultComponent } from './components/result/result.component';
import { ReslutformComponent } from './components/result/reslutform/reslutform.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    GroupComponent,
    GroupformComponent,
    TeamComponent,
    MatchComponent,
    ResultComponent,
    ReslutformComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    NgClass
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
