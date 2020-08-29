import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-specific-day',
  templateUrl: './specific-day.component.html',
  styleUrls: ['./specific-day.component.css']
})
export class SpecificDayComponent implements OnInit {

  myData: any[] = [];
  paramId: number;
  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.getWeatherData();
  }

  getWeatherData(): void{
    this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=47.80&lon=13.05&units=metric&appid=88f76052b7369dc2f772e1000503bb26')
      .subscribe(data => this.setWeatherData(data));
    this.route.params.subscribe(params => this.paramId = parseInt(params.id, 10));
  }

  setWeatherData(data): void{
    this.myData[0] = data.daily[this.paramId];
  }
}

