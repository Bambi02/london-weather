import { Injectable } from '@angular/core';
import { WeatherData } from './weather-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _BASE_URL =
    'https://www.metaweather.com/api/location/44418/2018/4/30/';
  private _CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
  private _REQUEST_URL = `${this._CROSS_DOMAIN}/${this._BASE_URL}`;

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(this._REQUEST_URL);
  }
}
