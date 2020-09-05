import { TestBed } from '@angular/core/testing';
import { WeatherWidgetComponent } from './weather-widget.component';
import {SpecificDayComponent} from '../specific-day/specific-day.component';
import {WeatherAPIService} from '../weather-api/weather-api.service';
import {HttpClient} from '@angular/common/http';
import {httpClientMock, WeatherAPIServiceMock} from '../mockServices';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('WeatherWidgetComponent', () => {
  interface Suite {
    weatherWidgetComponent: WeatherWidgetComponent;
    specificDayComponent: SpecificDayComponent;
    weatherApiService: jasmine.SpyObj<WeatherAPIService>;
    httpClient: jasmine.SpyObj<HttpClient>;
    activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  }

  const suite: Suite = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherWidgetComponent,
        SpecificDayComponent,
        {provide: ActivatedRoute, useValue: {
            params: of({id: 1})
          }},
        {provide: HttpClient, useValue: httpClientMock},
        {provide: WeatherAPIService, useValue: WeatherAPIServiceMock}
      ]
    }).compileComponents();
    suite.weatherApiService = TestBed.get(WeatherAPIService);
    suite.weatherWidgetComponent = TestBed.get(SpecificDayComponent);
    suite.httpClient = TestBed.get(HttpClient);
    suite.specificDayComponent = TestBed.get(SpecificDayComponent);
    suite.activatedRoute = TestBed.get(ActivatedRoute);
  });


  it('should create', () => {
    expect(suite.weatherWidgetComponent).toBeTruthy();
  });
  it('should get getWeatherData', () => {
    suite.weatherWidgetComponent.something = [];
    const data = {
      daily: [{
        dt: 123,
        sunrise: 23,
      },
        {
          dt: 123,
          sunrise: 23,
        },
        {
          dt: 123,
          sunrise: 23,
        },
        {
          dt: 123,
          sunrise: 23,
        },
        {
          dt: 123,
          sunrise: 23,
        },
        {
          dt: 123,
          sunrise: 23,
        },
        {
          dt: 123,
          sunrise: 23,
        }]
    } as any;
    suite.weatherWidgetComponent.setWeatherData(data);
  });
});
