import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin-user',
  templateUrl: './medecin-user.component.html',
  styleUrls: ['./medecin-user.component.scss'],
  
})
export class MedecinUserComponent implements OnInit {

  medecins: any[] = []; // Contient les données des médecins

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/medecins.json').subscribe(
      (data) => {
        this.medecins = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }

  viewDetails(medecin: any): void {
    alert(`Détails de ${medecin.nom}:\n
    Ville: ${medecin.ville}
    Numéro Tel: ${medecin.numero_tel}
    Spécialité: ${medecin.specialite}`);
  }
}