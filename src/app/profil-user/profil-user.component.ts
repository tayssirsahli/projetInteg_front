import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss']
})
export class ProfilUserComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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

    console.log('Form Data:', formData);

    if (!this.selectedRole) {
      this.errorMessage = 'Veuillez choisir un rôle!';
      return;
    }

    // Submit formData to the backend
    // ...
  }
}
