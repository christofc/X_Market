var fetched_data = [
    { first_nom: 'Lazslo', last_nom: 5     },
    { first_nom: 'Pig',    last_nom: 0.2   },
    { first_nom: 'Pirate', last_nom: 12 }
];

// Sort objects with name and price.
// Eg object:
// var objs = [
//     { first_nom: 'Lazslo', last_nom: 'Jamf'     },
//     { first_nom: 'Pig',    last_nom: 'Bodine'   },
//     { first_nom: 'Pirate', last_nom: 'Prentice' }
// ];
function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

//Find index of specific object using findIndex method.
objIndex = fetched_data.findIndex((obj => obj.first_nom == 'Pig'));

//Log object to Console.
// console.log("Before update: ", fetched_data)

//Update object's name property.
// fetched_data[objIndex].last_nom= 100;

let fetched_data_copy = JSON.parse(JSON.stringify(fetched_data));
// fetched_data_copy = fetched_data;
fetched_data.sort( compare );

// console.log("fetched_data: \n", fetched_data)
// console.log(typeof(fetched_data[0].last_nom))





// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
// const CoinbasePro = require('coinbase-pro');
// const publicClient = new CoinbasePro.PublicClient();
//
// publicClient
//   .getProductOrderBook('BTC-USD')
//   .then(data => {
//     console.log(typeof(data.asks[0][0]))// work with data
//   })
//   .catch(error => {
//     // handle the error
//   });



// const kraken = require('node-kraken-api')
// const kraken_public = kraken()
//
// kraken_public.call('Depth', { pair: 'XXBTZUSD', count: 1 })
//   .then(data => console.log(data.XXBTZUSD.asks[0][0]))
//   .catch(err => console.error(err))



// var bittrex_api = require('node-bittrex-api');
//
// bittrex_api.getorderbook({ market : 'USD-BTC', depth : 10, type : 'both' }, function( data, err ) {
//   console.log( data.result.buy[0], data.result.sell[0] );
// });

// const bittrex_api = require('bittrex-api-node');
// const bittrex_public = bittrex_api({
//   // publicKey: '<api-key>',
//   // secretKey: '<api-secret>',
//   // verbose: true,
//   // ...
// });
//
// bittrex_public.getOrderBook('USD-BTC').then((response) => {
//     console.log(response.result.buy[0].Rate, response.result.sell[0]);
// }).catch((error) => {
//   console.error('[getOrderBook(BTC-ZEN)] error:', error);
// });



var prices = [];
function compare_descending( a, b ) {
  if ( a.price > b.price ){
    return -1;
  }
  if ( a.price < b.price ){
    return 1;
  }
  return 0;
}


const https = require('https');

var options = {
  // "method": "GET",
  // "hostname": "rest.coinapi.io",
  // "uri": "api.coincap.io/v2/rates",
  // "hostname": "rest-sandbox.coinapi.io",
  // "path": "/v1/exchanges",
  // "path": "/v1/exchangerate/BTC/USD",
  // "path": "/v1/exchangerate/BTC",
  // "path": "/v1/symbols",

  "uri": "https://api.coincap.io/v2/markets?baseSymbol=BTC",

  // "baseSymbol": "BTC",
  // "path": "/v1/symbols",
  // "filter_symbol_id": "BTC/USD",
  // "path": "/v1/trades/latest",
  // "headers": {'X-CoinAPI-Key': '90CFD68E-C5DE-43E4-BDF7-254BBFA04A93'}
};

// // const url = "https://api.coincap.io/v2/rates";
// const url = "https://api.coincap.io/v2/markets?baseSymbol=LTC";
// // const url = "https://www.allcoin.ca/Api_Order/ticker/?symbol=btc2usdt";
//
// var request = https.request(url, function (response) {
//   var chunks = [];
//   // console.log(response.headers)
//   response.on("data", function (chunk) {
//     chunks.push(chunk);
//   });
//   response.on('end', function () {
//       var result = JSON.parse(chunks.join(''))
//       // obj_index = result.data.findIndex((obj => obj.symbol == 'BTC'));
//       // console.log(result.data[obj_index]);
//       // console.log(result.data)
//       max = 0;
//       min = 99999999;
//       max_indx = 0;
//       min_indx = 0;
//       for (var i=0; i<result.data.length;  i++){
//           var price = result.data[i].priceUsd;
//           var name = result.data[i].exchangeId;
//           var quoteSymbol = result.data[i].quoteSymbol;
//           if (quoteSymbol == 'ETH') {
//               if (price != null){
//                   prices.push({price: price, name:name});
//               }
//               if (price > max) {
//                   max = price;
//                   max_indx = i;
//               }
//               if (price < min && price != null) {
//                   min = price;
//                   min_indx = i;
//               }
//           }
//           // console.log(result.data[i].priceUsd);
//       }
//       console.log("max = " + max + result.data[max_indx].exchangeId);
//
//       console.log("min = " + min + result.data[min_indx].exchangeId);
//       prices = prices.sort( compare_descending );
//       console.log(prices)
//   });
// });
//
// request.end();
//



//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async() => {
  // let data = await CoinGeckoClient.ping();
  // let data = await CoinGeckoClient.coins.all();

  last_page = false;
  page = 1;
  while (!last_page){
      page = page + 1;

      params = {
          exchangeId: 'binance',
          page: page
      }
      let data = await CoinGeckoClient.coins.fetchTickers(coinId='bitcoin', params);
      console.log(data.data.tickers.length)
      if (data.data.tickers.length == 0){
          last_page = true;
      }
      console.log(data.data.tickers)
      console.log('Page = %d', page);
  }
  //
  // // let data = await CoinGeckoClient.exchanges.list();
  // console.log(data)
  //
  // // console.log(data.data[0].market_data)
  // // console.log(data.data.tickers)
  // for (var i=0; i<data.data.tickers.length; i++){
  //     var base = data.data.tickers[i].base;
  //     var market = data.data.tickers[i].market.name;
  //     var usd_price = data.data.tickers[i].converted_last.usd;
  //     // console.log(market + " " + base + " " + usd_price);
  //     if (base == "BTC"){
  //         console.log(market + " " + base + " " + usd_price);
  //         prices.push({price: usd_price, name:market});
  //
  //     }
  // }
  // prices = prices.sort( compare_descending );
  // console.log(prices)

};

// func();




var get_tickets = (id, exchange_ids=null, page_num) => {
    var page_num = 1;
    var id='bitcoin';
    var exchange_ids='binance';
    last_page = false;
    // while (!last_page){
        var page = `page=${page_num}`;
        var url = `https://api.coingecko.com/api/v3/coins/${id}/tickers?${page}`;


        if (exchange_ids != null){
            url = url + '&exchange_ids=' + exchange_ids;
        }

        promise = new Promise((resolve, reject) => {
            // const url = "https://api.coingecko.com/api/v3/coins/bitcoin/tickers?exchange_ids=binance";
            var request = https.request(url, function (response) {
                var chunks = [];
                response.on("data", function (chunk) {
                    chunks.push(chunk);
                });
                response.on('end', function () {
                    var result = JSON.parse(chunks.join(''));
                    console.log(result.tickers[0]);
                    console.log(result.tickers.length);

                    if (result.tickers.length < 100){
                        last_page = true;
                    }

                    // obj_index = fetched_data.findIndex((obj => obj.platform_name == 'allcoin'));
                    // // console.log(result.BTC_USD)
                    // // The best ask price. The cheapest price that you can buy coin right now.
                    // price = result.data.sell;
                    // // Convert string to float.
                    // price = parseFloat(price);
                    // //Update price in array.
                    // fetched_data[obj_index].price = price;
                })
            })
            request.end();
        })
    //     // console.log(data.data.tickers)
    //     console.log('Page = %d', page_num);
    //     page_num = page_num + 1;
    //     last_page = true;
    // }

    return promise, last_page
};

// res = func_3(id='bitcoin', exchange_ids='binance');
// console.log(res)

// const func_3 = async(id, exchange_ids=null) => {
const func_3 = async() => {
    var page_num = 1;
    last_page = false;
    while (!last_page){
        promise = get_tickets();
        Promise.all([promise])
        .then(
            console.log('eererer')
        )
        // promise = get_tickets(id=id, exchange_ids=exchange_ids, page_num=page_num);
        // // promise_func = get_tickets({id=id, exchange_ids=exchange_ids, page_num=page_num}).then(
        // let promise.then(value => {
        // // promise_func.then(
        //     console.log(value)
        //     page_num = page_num + 1;
        //     last_page = true;
        // });
    }
}

// func_3(id='bitcoin', exchange_ids='binance');

const binance_api = require('node-binance-api')().options({
    APIKEY: '5voMApdn1jp8AeVRdYazi7SXD32MpZjvwwrE3CGamIch96041K4QOOv0Ln4r1fTI',
    APISECRET: 'cCPQ6aYNCbUA3fmgYolN4FAFEnIJ5eJ4nU6zSOF33WYvAnkFBaZuZlOmNX1FTFPY',
    useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});
const kraken_api = require('node-kraken-api')
const kraken_public = kraken_api()


function binance(){
    promise = new Promise((resolve, reject) => {
        // *************** USE USD NOT USDT ***********************
        binance_api.prices((error, ticker) => {
            obj_index = fetched_data.findIndex((obj => obj.platform_name == 'binance'));
            // Convert string to float.
            price = parseFloat(ticker.BTCUSDT);
            console.log(ticker)
            //Update price in array.
            // fetched_data[obj_index].price = price;
        })
    })
}

const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

function get_coinbase_pairs() {
    var coinbase_pairs = [];
    promise = new Promise((resolve, reject) => {
        publicClient
          .getProducts()
          .then(data => {
              // Gather all pairs of Coinbase in an array.
              Object.keys(data).forEach(function (index) {
                  coinbase_pairs.push(data[index].id)
              })
              resolve(coinbase_pairs)
          })
          .catch(error => console.log(error))
    })
    return promise
};

function coinbase_ws() {
    promise = new Promise((resolve, reject) => {
        const websocket = new CoinbasePro.WebsocketClient(
          ['BTC-USD', 'ETH-USD']);

        websocket.on('message', data => {
          /* work with data */
          if (data.product_id == 'BTC-USD'){
              console.log(data.price)
          }
          // console.log(data.product_id)
        });
        websocket.on('error', err => {
          /* handle error */
        });
        websocket.on('close', () => {
          /* ... */
        });
    });
}


// ZEC-BTC LTC-GBP
// coinbase()
// lakebtc()






temp_results = ['A', 'B', 'C']
temp_names = ['1', '2', '3']

for (let idx_1=0; idx_1<temp_results.length - 1; idx_1++){
    for (let idx_2=(idx_1+1); idx_2<temp_results.length; idx_2++){

        console.log('idx_1 = '+ idx_1 + ' idx_2 = ' + idx_2)
        console.log(temp_names[idx_1], temp_names[idx_2])
    }
}
