import { AppComponent } from './app.component';
import { EuropeRegionComponent } from './theme/europe-region/europe-region.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './theme/country-details/country-details.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  {path: 'europe-regions', component: EuropeRegionComponent, children: [
    { path: 'country-details/:capitalName', canActivate: [AuthGuardService], component: CountryDetailsComponent }
  ]},
  {path: 'currencies', component: EuropeRegionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
