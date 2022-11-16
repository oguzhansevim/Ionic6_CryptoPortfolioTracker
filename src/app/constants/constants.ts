export const CONSTANTS = {
  pages: {
    home: {
      title: 'Overview',
      myBalance: 'My Balance',
      portfolioCost: 'Portfolio Cost:',
      myPortfolio: 'My Portfolio',
      top10: 'Top 10'
    },
  },
  data: {
    top10: [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        price: 16562.31,
        change: -0.99
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        price: 1211.82,
        change: -2.43
      },
      {
        name: 'Tether',
        symbol: 'USDT',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
        price: 0.9993,
        change: 0.01
      },
      {
        name: 'USD Coin',
        symbol: 'USDC',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
        price: 1.00,
        change: 0.01
      },
      {
        name: 'BNB',
        symbol: 'BNB',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        price: 271.01,
        change: -1.57
      },
      {
        name: 'Binance USD',
        symbol: 'BUSD',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
        price: 1.00,
        change: 0.00
      },
      {
        name: 'XRP',
        symbol: 'XRP',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
        price: 0.3702,
        change: -2.72
      },
      {
        name: 'Cardano',
        symbol: 'ADA',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
        price: 0.329,
        change: -1.70
      },
      {
        name: 'Dogecoin',
        symbol: 'DOGE',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
        price: 0.08494,
        change: 1.17
      },
      {
        name: 'Polygon',
        symbol: 'MATIC',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
        price: 0.8934,
        change: -4.92
      },
    ],
    portfolio: {
      cost: 0,
      value: 0,
      profit: 0,
      coins: [
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
          qty: 1.59,
          cost: 2000.00,
          value: 0
        },
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
          qty: 0.5,
          cost: 3235.54,
          value: 0
        },
      ],
    }
  },
}
