import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-by-country',
  templateUrl: './search-by-country.component.html',
  styleUrls: ['./search-by-country.component.css'],
})
export class SearchByCountryComponent implements OnInit {

  differentCity = [];
  errorMessage = null;
  myForm: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // @ts-ignore
    this.myForm =  new FormGroup({
      search: new FormControl('', Validators.required)
    });
  }

  getCountry(): void {
    this.differentCity = [];
    this.errorMessage = null;
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.myForm.value.search}&units=metric&appid=88f76052b7369dc2f772e1000503bb26`)
      .subscribe((response) => {
        this.differentCity.push( response);
      },
        (error) => {
          this.errorMessage = error; }
          );
  }

}
