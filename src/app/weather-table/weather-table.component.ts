import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css'],
})
export class WeatherTableComponent implements OnInit {
  public weatherData: WeatherData[] = [];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService.getWeatherData().subscribe((data) => {
      this.weatherData = data;
    });
  }
}
