import { TestBed } from '@angular/core/testing';

import { SearchByCountryComponent } from './search-by-country.component';
import {WeatherAPIService} from '../weather-api/weather-api.service';
import {HttpClient} from '@angular/common/http';
import {httpClientMock, WeatherAPIServiceMock} from '../mockServices';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('SearchByCountryComponent', () => {
  interface Suite {
    searchByCountryComponent: SearchByCountryComponent;
    weatherApiService: jasmine.SpyObj<WeatherAPIService>;
    httpClient: jasmine.SpyObj<HttpClient>;
  }

  let suite: Suite = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchByCountryComponent,
        {provide: HttpClient, useValue: httpClientMock},
        {provide: WeatherAPIService, useValue: WeatherAPIServiceMock}
      ],
      imports: [ReactiveFormsModule, FormsModule]
    }).compileComponents();
    suite.weatherApiService = TestBed.get(WeatherAPIService);
    suite.searchByCountryComponent = TestBed.get(SearchByCountryComponent);
    suite.httpClient = TestBed.get(HttpClient);
  });

  afterAll(() => suite = null);
  it('should create', () => {
    expect(suite.searchByCountryComponent).toBeTruthy();
  });
});
