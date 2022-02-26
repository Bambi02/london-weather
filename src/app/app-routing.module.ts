import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { IndexCalculatorComponent } from './index-calculator/index-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: WeatherTableComponent },
  { path: 'chart', component: WeatherChartComponent },
  { path: 'calculator', component: IndexCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
