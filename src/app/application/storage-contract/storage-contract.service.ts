import { Observable, map } from 'rxjs';
import { StorageContract } from '../../domain/entities/storage-contract/storage-contract';
import { StorageContractAdapter } from '../../adapters/storage-contract/storage-contract.adapter';
import { Injectable } from '@angular/core';
import { PriceUnit } from '../../domain/entities/price/price-unit';
import { PriceConverterService } from '../../domain/services/PriceConverterService';

@Injectable({
  providedIn: 'root'
})
export class StorageContractService {
  constructor(private readonly _storageContractAdapter: StorageContractAdapter, private readonly _priceConverterService: PriceConverterService) {

  }
  public getAll(): Observable<StorageContract[]> {
    return this._storageContractAdapter.getAll().pipe(map((storageContracts: StorageContract[]) => {
      return storageContracts.map((storageContract: StorageContract) => {
        let buyPriceInEuroMwh = this._priceConverterService.convert(storageContract.buyPrice, PriceUnit.EuroMwh);
        let sellPriceInEuroMwh = this._priceConverterService.convert(storageContract.sellPrice, PriceUnit.EuroMwh);
        storageContract.setBuyPrice(buyPriceInEuroMwh);
        storageContract.setSellPrice(sellPriceInEuroMwh);
        return storageContract;
      });
    }));
  }
}
