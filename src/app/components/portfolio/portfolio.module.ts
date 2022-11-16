import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PortfolioComponent} from "./portfolio.component";
import {SwiperModule} from 'swiper/angular';
import {ProfitBadgeComponentModule} from "../profit-badge/profit-badge.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SwiperModule, ProfitBadgeComponentModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent]
})
export class PortfolioComponentModule {
}
