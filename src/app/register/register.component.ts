import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ImageService } from '../services/ImageService';
import { Router } from '@angular/router';
import { Agent, AgentOptions } from 'http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  selectedRole: string = '';
  nom: string = '';
  prenom: string = '';
  tel: string = '';
  adresse?: string = '';
  email: string = '';
  password: string = '';
  code?: string;
  diplomeFile?: File;
  dateDeNaissance?: Date;
  diplomePreview: string | ArrayBuffer | null = null;
  numCIN?: string;
  genre?: string;
  prix?: number;
  service?: string;
  errorMessage: string = '';


  constructor(private userService: UserService, private imageService: ImageService, private router: Router) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        this.errorMessage = 'Le fichier doit être une image.';
        return;
      }

      this.diplomeFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.diplomePreview = reader.result;
      };
      reader.readAsDataURL(file);

      // Téléchargement via le service
      this.imageService.uploadImage(file).subscribe(
        response => {
          console.log('Image téléchargée avec succès:', response);
        },
        error => {
          console.error('Erreur lors du téléchargement de l\'image:', error);
        }
      );
    }
  }

  private validateForm(): boolean {
    if (!this.selectedRole) {
      this.errorMessage = 'Veuillez choisir un rôle!';
      return false;
    }

    if (!this.nom || !this.prenom || !this.tel || !this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires!';
      return false;
    }

    if (this.selectedRole === 'medecin' && (!this.code || !this.numCIN)) {
      this.errorMessage = 'Pour un médecin, le code et le numéro CIN sont obligatoires!';
      return false;
    }

    if (this.selectedRole === 'agence' && (!this.prix || !this.service)) {
      this.errorMessage = 'Pour une agence, la description, le prix et le service sont obligatoires!';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  onRegister(): void {
    if (!this.validateForm()) return;

    const formData = new FormData();
    formData.append('nom', this.nom);
    formData.append('prenom', this.prenom);
    formData.append('tel', this.tel);
    formData.append('email', this.email);
    formData.append('role', this.selectedRole);
    formData.append('password', this.password);
    formData.append('adresse', this.adresse);
    formData.append('dateDeNaissance', this.dateDeNaissance.toString());




    if (this.selectedRole === 'medecin') {
      formData.append('code', this.code || '');
      formData.append('numCIN', this.numCIN || '');
      if (this.diplomeFile) {
        formData.append('file', this.diplomeFile);
      }
    } else if (this.selectedRole === 'laveur') {
      formData.append('genre', this.genre || '');
    } else if (this.selectedRole === 'agence') {
      let agent: Agent | undefined;
      const dateOfBirth = this.dateDeNaissance ? new Date(this.dateDeNaissance) : undefined;
      agent = new Agent(
        this.nom,
        this.prenom,
        this.tel,
        this.adresse || '',
        dateOfBirth,
        this.email,
        this.password,
        this.service || ''
      );
      formData.append('prix', this.prix?.toString() || '');
      formData.append('service', this.service || '');
    }

    let registerObservable;

    if (this.selectedRole === 'medecin') {

      registerObservable = this.userService.registerMedecin(formData);
    } else if (this.selectedRole === 'laveur') {
      registerObservable = this.userService.registerLaveur(formData);
    } else if (this.selectedRole === 'agence') {

      registerObservable = this.userService.registerAgent(formData);
    }

    registerObservable?.subscribe(
      response => {
        console.log('Utilisateur enregistré avec succès:', response);
        this.router.navigate(['/payment']); // Redirection vers la page de paiement
      },
      error => {
        console.error('Erreur lors de l\'enregistrement:', error);
        this.errorMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer.';
      }
    );
  }






}
