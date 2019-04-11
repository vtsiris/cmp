import { Countries } from './../../model/countriescurrencies.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-europe-region',
  templateUrl: './europe-region.component.html',
  styleUrls: ['./europe-region.component.scss']
})
export class EuropeRegionComponent implements OnInit {

  currentUrl: string;
  countries: Countries[];
  currencyCode: string;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.api.getCountries().subscribe(data => this.countries = data);
  }

  getCurrencyCode(_currencyCode: string) {
    this.currencyCode = _currencyCode;
  }

}
