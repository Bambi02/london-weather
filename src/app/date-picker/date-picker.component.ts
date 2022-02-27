import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  constructor(private _weatherService: WeatherService) {}
  @Output() someData = new EventEmitter<string>();

  public formatedDate!: string;

  onDateChange($event: { target: { value: any } }) {
    const date = $event.target.value;
    this.formatedDate = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
    this._weatherService.setSelectedDate(this.formatedDate);
    this.someData.emit(this.formatedDate);
  }

  ngOnInit(): void {}
}
