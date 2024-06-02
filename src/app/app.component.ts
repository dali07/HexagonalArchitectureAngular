import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageContractComponent } from './application/storage-contract/storage-contract.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StorageContractComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HexagonalArchitectureAngular';
}
