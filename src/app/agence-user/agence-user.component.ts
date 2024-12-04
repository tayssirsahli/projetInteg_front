import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agence-user',
  templateUrl: './agence-user.component.html',
  styleUrls: ['./agence-user.component.scss']
})
export class AgenceUserComponent implements OnInit {

  agences: any[] = [];  // Initialize the agences array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the data from the agences.json file
    this.http.get<any[]>('assets/agences.json').subscribe(
      (data) => {
        console.log('Fetched data:', data);  // Check the console to verify data
        this.agences = data;  // Store the data in agences
      },
      (error) => {
        console.error('Error loading data:', error);  // Error handling
      }
    );
  }

}
