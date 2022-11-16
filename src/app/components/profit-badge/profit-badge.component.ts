import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profit-badge',
  templateUrl: './profit-badge.component.html',
  styleUrls: ['./profit-badge.component.scss'],
})
export class ProfitBadgeComponent  {

  @Input() profit = 0;

  constructor() { }

}
