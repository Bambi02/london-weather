import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { IndexCalculatorComponent } from './index-calculator/index-calculator.component';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherTable2Component } from './weather-table2/weather-table2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTableComponent,
    WeatherChartComponent,
    IndexCalculatorComponent,
    WeatherTable2Component,
    TableComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatSortModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
