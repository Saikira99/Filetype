// data-import.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-import',
  standalone: true,
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.scss'],
})
export class DataImportComponent implements OnInit {
  ngOnInit() {
    console.log('DataImportComponent initialized');
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  }

  onSubmit() {
    console.log('Form submitted');
  }
}
