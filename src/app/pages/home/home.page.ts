import {Component} from '@angular/core';
import {CONSTANTS} from "../../constants/constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constants = CONSTANTS;

  constructor() {
    this.calculatePortfolio();
  }

  calculatePortfolio() {
    for (let i = 0; i < CONSTANTS.data.portfolio.coins.length; i++) {
      let coin : any = CONSTANTS.data.top10.find(coin => coin.symbol === CONSTANTS.data.portfolio.coins[i].symbol);
      CONSTANTS.data.portfolio.coins[i].value = CONSTANTS.data.portfolio.coins[i].qty * coin.price;

      CONSTANTS.data.portfolio.cost += CONSTANTS.data.portfolio.coins[i].cost;
      CONSTANTS.data.portfolio.value += CONSTANTS.data.portfolio.coins[i].value;
    }

    CONSTANTS.data.portfolio.profit = (CONSTANTS.data.portfolio.value - CONSTANTS.data.portfolio.cost) / CONSTANTS.data.portfolio.cost * 100;
  }

}
