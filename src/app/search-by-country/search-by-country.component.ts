import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {WeatherAPIService} from '../weather-api/weather-api.service';

@Component({
  selector: 'app-search-by-country',
  templateUrl: './search-by-country.component.html',
  styleUrls: ['./search-by-country.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
    ])
  ]
})
export class SearchByCountryComponent implements OnInit {

  differentCity = [];
  errorMessage = null;
  myForm: FormGroup;
  @Input() isHidden: number;

  constructor(private weatherAPIService: WeatherAPIService) { }

  ngOnInit(): void {
    this.myForm =  new FormGroup({
      search: new FormControl('', Validators.required)
    });
  }

  getCountry(): void {
    this.differentCity = [];
    this.errorMessage = null;
    this.weatherAPIService.getWeatherByCityName(this.myForm.value.search).subscribe((response) => {
        this.differentCity.push(response);
      },
      (error) => {
        this.errorMessage = error;
      });
  }
}
