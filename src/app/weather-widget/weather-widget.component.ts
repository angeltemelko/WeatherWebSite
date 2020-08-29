import {Component, Input, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  something: any[] = [];
  @Output() variable = new EventEmitter();
  @Input() ngClass;

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.getWeatherData();
  }

  getWeatherData(): void{
    this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=47.80&lon=13.05&units=metric&appid=88f76052b7369dc2f772e1000503bb26')
      .subscribe(data => {
        this.setWeatherData(data);
      });
  }

   setWeatherData(data): void{
    this.something = data.daily.slice(0, 5);
  }
}
