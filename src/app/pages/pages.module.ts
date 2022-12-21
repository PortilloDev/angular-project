import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Modulos propios
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { BeerComponent } from './beer/beer.component';


//External
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
      DashboardComponent,
      ProgressComponent,
      GraficalComponent,
      PagesComponent,
      BeerComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    BeerComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
