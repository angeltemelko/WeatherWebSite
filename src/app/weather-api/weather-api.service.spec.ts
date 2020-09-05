import { TestBed } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';
import {HttpClient} from '@angular/common/http';
import {httpClientMock} from '../mockServices';

describe('WeatherAPIService', () => {
  interface Suite {
    weatherApiService: WeatherAPIService;
    httpClient: jasmine.SpyObj<HttpClient>;
  }

  let suite: Suite = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherAPIService,
        {provide: HttpClient, useValue: httpClientMock}
      ]
    }).compileComponents();
    suite.httpClient = TestBed.get(HttpClient);
    suite.weatherApiService = TestBed.get(WeatherAPIService);
  });

  afterAll(() => suite = null);

  it('should be created', () => {
    expect(suite.weatherApiService).toBeTruthy();
  });

  it('should get weather by city', () => {
    // given
    const city = 'vienna';

    // when
    suite.weatherApiService.getWeatherByCityName(city);

    // then
    expect(suite.httpClient.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=88f76052b7369dc2f772e1000503bb26`);
  });
  it('should get weather by lat and long', () => {
    // given
    const long = 20.20;
    const lat = 20.20;

    // when
    suite.weatherApiService.getWeatherByLongAndLat(lat, long);

    // then
    expect(suite.httpClient.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat.toFixed(2)}&lon=${long.toFixed(2)}&units=metric&appid=88f76052b7369dc2f772e1000503bb26`);
  });
});
