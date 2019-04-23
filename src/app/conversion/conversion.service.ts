import {Injectable} from '@angular/core';

@Injectable()
  export class ConversionService {

  conversions = [{
    _id: '5cac015318ba661704d8f2e6',
    sourceAmount: 4,
    sourceCurrency: 'USD',
    targetCurrency: 'RUB',
    rate: 65.1502756536,
    convertedAmount: 260.6,
    timeStamp: '2019-04-09T02:20:03.000Z'
  }, {
    _id: '5caaa6d7610f363a8c7aa35f',
    sourceAmount: 4,
    sourceCurrency: 'USD',
    targetCurrency: 'RUB',
    rate: 6,
    convertedAmount: 24,
    timeStamp: '2019-04-08T01:42:05.000Z'
  }, {
    _id: '5caaa6bc610f363a8c7aa35e',
    sourceAmount: 3,
    sourceCurrency: 'GBP',
    targetCurrency: 'RUB',
    rate: 85.3254671973,
    convertedAmount: 255.98,
    timeStamp: '2019-04-08T01:41:16.000Z'
  }, {
    _id: '5ca920931cc5da25140f2dad',
    sourceAmount: 45,
    sourceCurrency: 'USD',
    targetCurrency: 'RUB',
    rate: 65.2781981661,
    convertedAmount: 2937.52,
    timeStamp: '2019-04-06T21:56:35.000Z'
  }];

  constructor() {
  }

  listConversions() {
    return this.conversions;
  }
}