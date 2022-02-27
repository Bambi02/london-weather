import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ELEMENT_DATA: WeatherData[] = [];
  dataSource = new MatTableDataSource<WeatherData>(this.ELEMENT_DATA);

  displayedColumns = [
    'created',
    'weather_state_name',
    'the_temp',
    'air_pressure',
    'humidity',
    'wind_speed',
    'wind_direction_compass',
  ];

  getNewData(value: string) {
    this._weatherService.getWeatherData().subscribe((data) => {
      this.dataSource.data = data as WeatherData[];
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService.getWeatherData().subscribe((data) => {
      this.dataSource.data = data as WeatherData[];
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
