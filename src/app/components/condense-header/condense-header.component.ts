import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-condense-header',
  templateUrl: './condense-header.component.html',
  styleUrls: ['./condense-header.component.scss'],
})
export class CondenseHeaderComponent  {

  @Input() title = '';

  constructor() { }

}
