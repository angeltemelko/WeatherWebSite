import { TestBed } from '@angular/core/testing';

import { WeatherComponentComponent } from './weather-component.component';
import {faSun} from '@fortawesome/free-solid-svg-icons';

describe('WeatherComponentComponent', () => {
  interface Suite {
    weatherComponentComponent: WeatherComponentComponent;
  }

  let suite: Suite = {} as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherComponentComponent
      ]
    }).compileComponents();
    suite.weatherComponentComponent = TestBed.get(WeatherComponentComponent);
  });

  afterAll(() => suite = null);


  it('should create', () => {
    expect(suite.weatherComponentComponent).toBeTruthy();
  });

  it('should getIcons', () => {
    // given
    suite.weatherComponentComponent.weatherOfTheCity = [{
      clouds: 0,
      dew_point: 8.03,
      dt: 1599300000,
      feels_like: {day: 23.15, night: 15.01, eve: 22.76, morn: 23.15},
      humidity: 36,
      pop: 0,
      pressure: 1019,
      sunrise: 1599278815,
      sunset: 1599325358,
      temp: {day: 24,
        eve: 24.51,
        max: 24.51,
        min: 16.7,
        morn: 24,
        night: 16.7},
      uvi: 7.42,
      weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
      wind_deg: 103,
      wind_speed: 0.55,
    }] as any;

    // when
    const result = suite.weatherComponentComponent.getIcons(0);

    // then
    expect(result).toBe(faSun);
  });
});
