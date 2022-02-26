import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  WeatherTable2DataSource,
  WeatherTable2Item,
} from './weather-table2-datasource';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table2',
  templateUrl: './weather-table2.component.html',
  styleUrls: ['./weather-table2.component.css'],
})
export class WeatherTable2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<WeatherTable2Item>;
  dataSource: WeatherTable2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new WeatherTable2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
