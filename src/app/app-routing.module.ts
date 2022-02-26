import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { IndexCalculatorComponent } from './index-calculator/index-calculator.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'chart', component: WeatherChartComponent },
  { path: 'calculator', component: IndexCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
