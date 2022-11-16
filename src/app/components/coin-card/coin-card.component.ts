import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
})
export class CoinCardComponent  {

  @Input() coin: any;

  constructor() { }

}
