import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageContractComponent } from './storage-contract.component';

describe('StorageContractComponent', () => {
  let component: StorageContractComponent;
  let fixture: ComponentFixture<StorageContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageContractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorageContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
