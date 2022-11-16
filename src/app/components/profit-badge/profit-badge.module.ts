import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfitBadgeComponent} from "./profit-badge.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ProfitBadgeComponent],
  exports: [ProfitBadgeComponent]
})
export class ProfitBadgeComponentModule {
}
