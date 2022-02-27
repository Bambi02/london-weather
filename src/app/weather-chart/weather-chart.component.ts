import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css'],
})
export class WeatherChartComponent implements OnInit {
  public weatherData: WeatherData[] = [];
  public chart: any = [];

  constructor(private _weatherService: WeatherService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this._weatherService.getWeatherData().subscribe((data) => {
      const temp = data.map((input) => input.the_temp);
      const date = data.map((input) => input.created);

      const formateDate = (date: string): string => {
        const yy = date.slice(2, 4);
        const mm = date.slice(5, 7);
        const dd = date.slice(8, 10);
        const hh = date.slice(11, 13);
        const min = date.slice(14, 16);

        return `${dd}.${mm}.${yy} - ${hh}:${min}`;
      };

      const formatedDate = date.map((date) => formateDate(date));

      this.chart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: formatedDate.reverse(),
          datasets: [
            {
              label: 'Temperature',
              data: temp.reverse(),
              borderColor: '#6f42c1',
              tension: 0.3,
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: 'Temp in °C',
              },
              grid: {
                display: true,
              },
            },
            x: {
              grid: {
                display: true,
              },
            },
          },
        },
      });
    });
  }
}
