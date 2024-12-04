import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Medecin } from '../model/medecin.model';  // Modèle Medecin

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  medecins: Medecin[] = [];  // Tableau pour stocker les médecins
  errorMessage: string = '';  // Message d'erreur

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadMedecins();  // Charger les médecins lors de l'initialisation du composant
  }

  // Charger les médecins
  loadMedecins(): void {
    this.userService.getMedecins().subscribe(
      (data: Medecin[]) => {
        this.medecins = data;  // Stocker les médecins récupérés
      },
      error => {
        console.error('Erreur lors du chargement des médecins', error);
        this.errorMessage = 'Erreur lors du chargement des médecins.';
      }
    );
  }

  // Activer un médecin
  activateUser(id: number): void {
    this.userService.validateUser(id).subscribe(
      response => {
        console.log(response);  // Afficher la réponse dans la console
        this.loadMedecins();  // Recharger la liste des médecins
      },
      error => {
        console.error('Erreur lors de l\'activation', error);
        this.errorMessage = 'Erreur lors de l\'activation de l\'utilisateur.';
      }
    );
  }

  // Désactiver un médecin
  deactivateUser(id: number): void {
    this.userService.deactivateUser(id).subscribe(
      response => {
        console.log(response);  // Afficher la réponse dans la console
        this.loadMedecins();  // Recharger la liste des médecins
      },
      error => {
        console.error('Erreur lors de la désactivation', error);
        this.errorMessage = 'Erreur lors de la désactivation de l\'utilisateur.';
      }
    );
  }
}
