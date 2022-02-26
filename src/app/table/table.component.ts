import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource } from './table-datasource';
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
  @ViewChild(MatTable) table!: MatTable<WeatherData>;

  weatherData: WeatherData[] = [];
  dataSource: TableDataSource = new TableDataSource(this.weatherData);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'date',
    'time',
    'weather state',
    'temp',
    'air pressure',
    'humidity',
    'wind speed',
    'wind direction',
  ];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService.getWeatherData().subscribe((data) => {
      this.weatherData = data;
      this.dataSource = new TableDataSource(this.weatherData);
    });
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
