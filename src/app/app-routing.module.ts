import { EuropeRegionComponent } from './theme/europe-region/europe-region.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './theme/country-details/country-details.component';

const routes: Routes = [
  {path: 'europe-regions', component: EuropeRegionComponent, children: [
    { path: 'country-details/:capitalName', component: CountryDetailsComponent }
  ]},
  {path: 'currencies', component: EuropeRegionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
