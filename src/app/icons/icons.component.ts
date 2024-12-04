import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  icons: any[] = [];  // Make sure this property is initialized

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from JSON file
    this.http.get<any[]>('assets/laveurs.json').subscribe(data => {
      console.log('Fetched data:', data);  // Add a log to verify data
      this.icons = data;
    }, error => {
      console.error('Error loading data', error);  // Add error handling
    });
  }
}
