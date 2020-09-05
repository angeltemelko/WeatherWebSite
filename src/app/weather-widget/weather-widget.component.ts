import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WeatherAPIService} from '../weather-api/weather-api.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  something: any[] = [];
  @Input() ngClass;

  constructor(private http: HttpClient, private weatherAPIService: WeatherAPIService) { }

  ngOnInit(): void{
    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }

  getWeatherData(lat, long): void{
    this.weatherAPIService.getWeatherByLongAndLat(lat, long).subscribe(data => this.setWeatherData(data));
  }

   setWeatherData(data): void{
    this.something = data.daily.slice(0, 5);
  }
}
