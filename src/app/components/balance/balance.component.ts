import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent  {

  @Input() title: any;
  @Input() portfolioValue: any;
  @Input() portfolioProfit: any;
  @Input() portfolioCost: any;

  constructor() { }

}
