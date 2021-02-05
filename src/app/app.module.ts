import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { LiveReportsComponent } from './components/live-reports/live-reports.component';
import { CoinsListComponent } from './components/coins-list/coins-list.component';
import { ReportComponent } from './components/report-list/report.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';



const routes: Routes = [
  { path: '', component: CoinsListComponent },
  { path: 'live-reports', component:LiveReportsComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LiveReportsComponent,
    CoinsListComponent,
    ReportComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
