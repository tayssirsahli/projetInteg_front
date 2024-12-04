import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    selectedRole: string = '';
    nom: string = '';
    prenom: string = '';
    tel: string = '';
    email: string = '';
    code?: string;
    diplome?: string;
    numCIN?: string;
    genre?: string;
    description?: string;
    prix?: number;
    service?: string;
    errorMessage: string = '';
  
    medecins: any[] = [];
    laveurs: any[] = [];
    agences: any[] = [];
  
    ngOnInit(): void {}
  
    onRegister() {
      const formData = {
        role: this.selectedRole,
        nom: this.nom,
        prenom: this.prenom,
        tel: this.tel,
        email: this.email,
        ...(this.selectedRole === 'medecin' && { code: this.code, diplome: this.diplome, numCIN: this.numCIN }),
        ...(this.selectedRole === 'laveur' && { genre: this.genre }),
        ...(this.selectedRole === 'agence' && { description: this.description, prix: this.prix, service: this.service }),
      };
  
      if (!this.selectedRole) {
        this.errorMessage = 'Veuillez choisir un rôle!';
        return;
      }
  
      // Add the formData to the appropriate list based on the role
  if (this.selectedRole === 'medecin') {
    this.medecins.push(formData);
  } else if (this.selectedRole === 'laveur') {
    this.laveurs.push(formData);
  } else if (this.selectedRole === 'agence') {
    this.agences.push(formData);
  }

  // Clear form fields after successful registration
  this.clearForm();

  // Optionally, show a success message or handle any further logic
  this.errorMessage = ''; // Reset error message
  alert('User registered successfully!');
}
clearForm() {
    // Clear the form fields after submitting
    this.selectedRole = '';
    this.nom = '';
    this.prenom = '';
    this.tel = '';
    this.email = '';
    this.code = '';
    this.diplome = '';
    this.numCIN = '';
    this.genre = '';
    this.description = '';
    this.prix = undefined;
    this.service = '';
  }}