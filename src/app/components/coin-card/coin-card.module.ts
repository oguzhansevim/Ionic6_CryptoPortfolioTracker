import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CoinCardComponent} from "./coin-card.component";
import {ProfitBadgeComponentModule} from "../profit-badge/profit-badge.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProfitBadgeComponentModule],
  declarations: [CoinCardComponent],
  exports: [CoinCardComponent]
})
export class CoinCardComponentModule {
}
