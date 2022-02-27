import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-calculator',
  templateUrl: './index-calculator.component.html',
  styleUrls: ['./index-calculator.component.css'],
})
export class IndexCalculatorComponent implements OnInit {
  public isTempInC: boolean = true;
  public inputInC: number = 0;
  public inputInF: number = 0;
  public inputHumidity: number = 0;
  public temperatureInF: number = 0;
  public result: string = '';
  public showHistory: boolean = false;
  public storageArray: string[] = [];

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
    this.temperatureInF = (9 / 5) * cels + 32;
  }

  transformResultToC(far: number): number {
    return (5 / 9) * (far - 32);
  }

  saveDataToLocalStorage(data: string): void {
    this.storageArray.push(data);
    if (this.storageArray.length > 5) {
      this.storageArray.shift();
    }
    localStorage.setItem('results', JSON.stringify(this.storageArray));
  }

  toggleShowHistory(): void {
    this.showHistory = !this.showHistory;
  }

  submit() {
    if (this.isTempInC) {
      this.transformInputToF(this.inputInC);
      const resultInC = Math.round(
        this.transformResultToC(
          this.calculateHeatIndex(this.temperatureInF, this.inputHumidity)
        )
      );
      if (this.inputInC < 26.7) {
        this.result =
          'Heat Index cannot be calculated for temperature less than 26,7 °C';
      } else {
        this.result = `Heat Index is ${resultInC} °C`;
        this.saveDataToLocalStorage(this.result);
      }
    } else {
      const resultInF = this.calculateHeatIndex(
        this.inputInF,
        this.inputHumidity
      );
      if (this.inputInF < 80) {
        this.result =
          'Heat Index cannot be calculated for temperature less than 80 °F';
      } else {
        this.result = `Heat Index is ${Math.round(resultInF)} °F`;
        this.saveDataToLocalStorage(this.result);
      }
    }
  }

  switchUnits(): void {
    this.isTempInC = !this.isTempInC;
    this.result = '';
  }

  constructor() {}

  ngOnInit(): void {
    this.storageArray = JSON.parse(localStorage.getItem('results')!) || [];
  }
}
