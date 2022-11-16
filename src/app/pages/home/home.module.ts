import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {ProfitBadgeComponentModule} from "../../components/profit-badge/profit-badge.module";
import {CondenseHeaderComponentModule} from "../../components/condense-header/condense-header.module";
import {CoinCardComponentModule} from "../../components/coin-card/coin-card.module";
import {PortfolioComponentModule} from "../../components/portfolio/portfolio.module";
import {BalanceComponentModule} from "../../components/balance/balance.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ProfitBadgeComponentModule,
    CondenseHeaderComponentModule,
    CoinCardComponentModule,
    PortfolioComponentModule,
    BalanceComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
