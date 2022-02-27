import { Injectable } from '@angular/core';
import { WeatherData } from './weather-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private date: Date = new Date();
  private today = `${this.date.getFullYear()}/${
    this.date.getMonth() + 1
  }/${this.date.getDate()}`;

  public selectedDate: string = this.today;

  constructor(private http: HttpClient) {}

  public setSelectedDate(date: string) {
    this.selectedDate = date;
  }

  getWeatherData(): Observable<WeatherData[]> {
    const BASE_URL = `https://www.metaweather.com/api/location/44418/${this.selectedDate}/`;
    const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
    const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

    return this.http.get<WeatherData[]>(REQUEST_URL);
  }
}
