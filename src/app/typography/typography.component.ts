import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  agences: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() : void{
    this.http.get<any[]>('assets/agences.json').subscribe(data => {
      console.log('Fetched data:', data);  // Add a log to verify data
      this.agences = data;
    }, error => {
      console.error('Error loading data', error);  // Add error handling
    });
  }

}
