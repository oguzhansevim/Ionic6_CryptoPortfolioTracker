import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BalanceComponent} from "./balance.component";
import {ProfitBadgeComponentModule} from "../profit-badge/profit-badge.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProfitBadgeComponentModule],
  declarations: [BalanceComponent],
  exports: [BalanceComponent]
})
export class BalanceComponentModule {
}
