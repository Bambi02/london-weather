import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-calculator',
  templateUrl: './index-calculator.component.html',
  styleUrls: ['./index-calculator.component.css'],
})
export class IndexCalculatorComponent implements OnInit {
  public tempInC: boolean = true;
  public celsius: number = 0;
  public farenheit: number = 0;
  public humidity: number = 0;
  public temperature: number = 0;
  public result: number = 0;

  calculateHeatIndex = (t: number, h: number): number => {
    const index =
      -42.379 +
      2.04901523 * t +
      10.14333127 * h +
      -0.22475541 * t * h +
      -0.00683783 * t * t +
      -0.05481717 * h * h +
      0.00122874 * t * t * h +
      0.00085282 * t * h * h +
      -0.00000199 * t * t * h * h;
    return index;
  };

  transformInputToF(cels: number): void {
    this.temperature = (9 / 5) * cels + 32;
  }

  transformResultToC(far: number): void {
    this.result = (5 / 9) * (far - 32);
  }

  submit() {
    if (this.tempInC) {
      this.transformInputToF(this.celsius);
      this.transformResultToC(
        this.calculateHeatIndex(this.temperature, this.humidity)
      );
    } else {
      this.temperature = this.farenheit;
      this.result = this.calculateHeatIndex(this.temperature, this.humidity);
    }
  }

  switchUnits(): void {
    this.tempInC = !this.tempInC;
    this.result = 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
