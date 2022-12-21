import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraficalComponent } from "./grafical/grafical.component";
import { ProgressComponent } from "./progress/progress.component";
import { PagesComponent } from "./pages.component";
import { BeerComponent } from "./beer/beer.component";

const routes: Routes = [
 {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component : DashboardComponent},
      { path: 'progress', component : ProgressComponent},
      { path: 'grafical', component : GraficalComponent},
      { path: 'beer', component : BeerComponent},
    ]
},
];


@NgModule({
  imports:[
    RouterModule.forChild(routes),

  ],

  exports:[RouterModule]
})

export class PagesRoutingModule{}

