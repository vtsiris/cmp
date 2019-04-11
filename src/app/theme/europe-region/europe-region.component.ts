import { AuthService } from './../../services/auth-guard/auth.service';
import { Countries } from './../../model/countriescurrencies.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-europe-region',
  templateUrl: './europe-region.component.html',
  styleUrls: ['./europe-region.component.scss']
})
export class EuropeRegionComponent implements OnInit, CanActivate {
  path: import('@angular/router').ActivatedRouteSnapshot[];
  route: import('@angular/router').ActivatedRouteSnapshot;

  currentUrl: string;
  countries: Countries[];
  currencyCode: string;
  isAuthenticated = false;

  constructor(private api: ApiService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.api.getCountries().subscribe(data => {this.countries = data; this.auth._isAuthenticated.next(true); });
  }

  getCurrencyCode(_currencyCode: string) {
    this.currencyCode = _currencyCode;
  }

}
