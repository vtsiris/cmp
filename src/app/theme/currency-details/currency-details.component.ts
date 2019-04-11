import { Countries } from './../../model/countriescurrencies.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Currency } from 'src/app/model/countriescurrencies.model';
import { CapitalDetails } from 'src/app/model/capitaldetails.model';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit, OnChanges {

  @Input() currencyCode: string;
  @Input() countries: Countries[];
  countryDetails: CapitalDetails[];

  currencyDetails: Currency[];

  constructor(private api: ApiService) { }

  ngOnChanges() {
    this.api.getCurrencyDetails(this.currencyCode).subscribe(data => this.currencyDetails = data);
  }

  ngOnInit() {
  }

  getCountryInfo(country: string) {
    this.countries.forEach(data => {
     if (country === data.name) {
      this.api.getCountryDetails(data.capital)
      .subscribe(value => {this.countryDetails = value; });
     }
    });
  }

  deleteCountryInfo() {
    this.countryDetails = undefined;
  }

}
