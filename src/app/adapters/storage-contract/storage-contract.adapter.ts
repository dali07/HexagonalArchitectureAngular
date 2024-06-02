import { Observable, of } from 'rxjs';
import { StorageContract } from '../../domain/entities/storage-contract/storage-contract';
import { PriceUnit } from '../../domain/entities/price/price-unit';
import { Injectable } from '@angular/core';
import { Price } from '../../domain/entities/price/Price';

@Injectable({
  providedIn: 'root'
})
export class StorageContractAdapter {
  getAll(): Observable<StorageContract[]> {
    const mockData = [
      StorageContract.create("contract 1")
        .setBuyPrice(Price.create(12.5, PriceUnit.EuroMwh))
        .setSellPrice(Price.create(11.25, PriceUnit.EuroMwh)),
      StorageContract.create("contract 2")
        .setBuyPrice(Price.create(10.75, PriceUnit.PenceTherm))
        .setSellPrice(Price.create(10.90, PriceUnit.PenceTherm)),
      StorageContract.create("contract 3")
        .setBuyPrice(Price.create(9.15, PriceUnit.EuroMwh))
        .setSellPrice(Price.create(9.25, PriceUnit.EuroMwh)),
    ];
    return of(mockData);
  }
}
