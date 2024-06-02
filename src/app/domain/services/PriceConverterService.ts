import { Price } from '../entities/price/Price';
import { PriceUnit } from '../entities/price/price-unit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceConverterService {
  private readonly _formulas: Map<string, (price: Price) => Price> = new Map<string, (price: Price) => Price>();
  constructor() {
    this._formulas.set(`${PriceUnit.PenceTherm}_${PriceUnit.EuroMwh}`, this.penceThermToEuroMwh);
  }

  public convert(price: Price | undefined, targetUnit: PriceUnit): Price | undefined {
    if (price === undefined || price.unit === targetUnit) {
      return price;
    }
    let convesrionFormula = this._formulas.get(`${price.unit}_${targetUnit}`);
    if (!convesrionFormula) {
      throw Error(`Unhandled conversion from ${price.unit} to ${targetUnit}.`);
    }
    return convesrionFormula(price);
  }

  private penceThermToEuroMwh(price: Price): Price {
    let convertedValue = 0.5 * price.value;
    return Price.create(convertedValue, PriceUnit.EuroMwh);
  }
}
