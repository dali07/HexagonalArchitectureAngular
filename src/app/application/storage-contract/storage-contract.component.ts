import { Component, OnInit } from '@angular/core';
import { StorageContractService } from './storage-contract.service';
import { StorageContract } from '../../domain/entities/storage-contract/storage-contract';
import { PriceUnitToTextPipe } from '../shared/pipes/price-unit-to-text.pipe';

@Component({
  selector: 'app-storage-contract',
  standalone: true,
  imports: [PriceUnitToTextPipe],
  templateUrl: './storage-contract.component.html',
  styleUrl: './storage-contract.component.scss'
})
export class StorageContractComponent implements OnInit {
  protected storageContractList: StorageContract[] = [];
  constructor(private readonly _storageContractService: StorageContractService) {

  }

  ngOnInit() {
    this.getStorageContractList();
  }

  private getStorageContractList() {
    this._storageContractService.getAll()
      .subscribe(storageContractList => this.storageContractList = storageContractList
      );
  }
}
