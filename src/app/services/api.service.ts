import { Countries } from './../model/countriescurrencies.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapitalDetails } from '../model/capitaldetails.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


capitalCurenciesURL = 'https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies';
CountryDetailsURL = 'https://restcountries.eu/rest/v2/capital/';

constructor(private http: HttpClient) {}

getCountries() {
  return this.http.get<Countries[]>(this.capitalCurenciesURL);
}

getCountryDetails(capitalName: string) {
  return this.http.get<CapitalDetails[]>(this.CountryDetailsURL + capitalName);
}

}
