import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-laveur-users',
  templateUrl: './laveur-users.component.html',
  styleUrls: ['./laveur-users.component.scss']
})
export class LaveurUsersComponent implements OnInit {

  laveurs: any[] = [];  // Ensure the 'icons' array is initialized



  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from JSON file
    this.http.get<any[]>('assets/laveurs.json').subscribe(
      (data) => {
        console.log('Fetched data:', data);  // Verify fetched data in console
        this.laveurs = data;  // Store data in icons array
      },
      (error) => {
        console.error('Error loading data:', error);  // Error handling
      }
    );
  }

}
