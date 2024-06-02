import { Given, Then, When } from '@cucumber/cucumber';
import * as chai from 'chai';
import { Price } from '../../../../domain/entities/price/price';
import { PriceUnit } from '../../../../domain/entities/price/price-unit';
import { PriceConverterService } from '../../../../domain/services/PriceConverterService';

let priceConverterService = new PriceConverterService();
let price: Price;
let actualConvertedPrice: Price | undefined;

Given('A price with a value of {float} expressed in {string}', function (priceValue, priceUnit) {
    price = Price.create(priceValue, toPriceUnit(priceUnit));
});

When('converting this value to {string}', function (targetUnit) {
    actualConvertedPrice = priceConverterService.convert(price, toPriceUnit(targetUnit));
});

Then('the result should be {float}', (expectedPriceValue: number) => {
    const expectedPrice = Price.create(expectedPriceValue, PriceUnit.EuroMwh);
    chai.expect(expectedPrice).to.deep.equal(actualConvertedPrice);
});

function toPriceUnit(unit: string) {
    switch (unit) {
        case 'euro/mwh':
            return PriceUnit.EuroMwh;
        case 'pence/therm':
            return PriceUnit.PenceTherm;
        default: throw Error(`Unhandled conversion from ${unit} to PriceUnit`);
    }
}
