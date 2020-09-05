export const WeatherAPIServiceMock = jasmine.createSpyObj(
  'WeatherAPIService', [
    'getWeatherByLongAndLat',
    'getWeatherByCityName'
  ]
);
export const httpClientMock = jasmine.createSpyObj(
  'HttpClient', [
    'get',
    'post'
  ]
);
