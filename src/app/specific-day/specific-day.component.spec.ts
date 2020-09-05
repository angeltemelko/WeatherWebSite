import { TestBed } from '@angular/core/testing';
import { SpecificDayComponent } from './specific-day.component';
import {WeatherAPIService} from '../weather-api/weather-api.service';
import {HttpClient} from '@angular/common/http';
import {httpClientMock, WeatherAPIServiceMock} from '../mockServices';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('SpecificDayComponent', () => {
  interface Suite {
    specificDayComponent: SpecificDayComponent;
    weatherApiService: jasmine.SpyObj<WeatherAPIService>;
    httpClient: jasmine.SpyObj<HttpClient>;
    activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  }

  let suite: Suite = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpecificDayComponent,
        {provide: ActivatedRoute, useValue: {
            params: of({id: 1})
          }},
        {provide: HttpClient, useValue: httpClientMock},
        {provide: WeatherAPIService, useValue: WeatherAPIServiceMock}
        ]
    }).compileComponents();
    suite.weatherApiService = TestBed.get(WeatherAPIService);
    suite.specificDayComponent = TestBed.get(SpecificDayComponent);
    suite.httpClient = TestBed.get(HttpClient);
    suite.activatedRoute = TestBed.get(ActivatedRoute);
  });

  afterAll(() => suite = null);

  it('should create', () => {
    expect(suite.specificDayComponent).toBeTruthy();
  });
});
