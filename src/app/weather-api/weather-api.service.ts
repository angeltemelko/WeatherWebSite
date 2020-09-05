import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  constructor(private http: HttpClient) { }

  getWeatherByLongAndLat(lat, long): Observable<any>{
   return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat.toFixed(2)}&lon=${long.toFixed(2)}&units=metric&appid=88f76052b7369dc2f772e1000503bb26`);
  }
  getWeatherByCityName(city): Observable<any>{
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=88f76052b7369dc2f772e1000503bb26`);
  }
}
