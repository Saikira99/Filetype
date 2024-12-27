import { Component } from '@angular/core';
import { DataImportComponent } from './data-import/data-import.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [DataImportComponent], // Import the DataImportComponent
})
export class AppComponent {
  title = 'my-angular-app'; // Title of the app
}
