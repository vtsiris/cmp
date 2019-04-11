import { CapitalDetails } from './../../model/capitaldetails.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  countryDetails: CapitalDetails[];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => this.api.getCountryDetails(params.get('capitalName'))
    .subscribe( data => {this.countryDetails = data; })
    );
  }

}
