import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-calculator',
  templateUrl: './index-calculator.component.html',
  styleUrls: ['./index-calculator.component.css'],
})
export class IndexCalculatorComponent implements OnInit {
  public result: number = 0;

  submit(calculator: any) {
    console.log('submitted', calculator);
  }

  constructor() {}

  ngOnInit(): void {}
}
