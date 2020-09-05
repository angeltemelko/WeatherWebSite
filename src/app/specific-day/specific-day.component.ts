import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherAPIService} from '../weather-api/weather-api.service';

@Component({
  selector: 'app-specific-day',
  templateUrl: './specific-day.component.html',
  styleUrls: ['./specific-day.component.css']
})
export class SpecificDayComponent implements OnInit {

  myData: any[] = [];
  paramId: number;
  constructor(private route: ActivatedRoute,
              private weatherAPIService: WeatherAPIService) { }

  ngOnInit(): void{
    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }

  getWeatherData(lat, long): void{
    this.weatherAPIService.getWeatherByLongAndLat(lat, long).subscribe(data => this.setWeatherData(data));
    this.route.params.subscribe(params => this.paramId = parseInt(params.id, 10));
  }

  setWeatherData(data): void{
    this.myData[0] = data.daily[this.paramId];
  }
}

