import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
;
  }

  // Form fields
  dateDeces: string = '';
  heureDeces: string = '';
  nomMedecin: string = '';
  nomClient: string = '';
  cinClient: string = '';
  
  // Files and previews
  certificatDecesFile?: File;
  certificatPreview: string | ArrayBuffer | null = null;
  cinDecesFile?: File;
  cinDecesPreview: string | ArrayBuffer | null = null;

  // Error message
  errorMessage: string = '';

  // Handlers for file uploads
  onCertificatSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.certificatDecesFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => (this.certificatPreview = reader.result);
      reader.readAsDataURL(this.certificatDecesFile);
    }
  }

  onCinDecesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.cinDecesFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => (this.cinDecesPreview = reader.result);
      reader.readAsDataURL(this.cinDecesFile);
    }
  }

  // Form submission
  onSubmit(): void {
    if (!this.dateDeces || !this.heureDeces || !this.nomMedecin || !this.nomClient || !this.cinClient) {
      this.errorMessage = 'Tous les champs sont obligatoires !';
      return;
    }

    if (!/^[0-9]{8}$/.test(this.cinClient)) {
      this.errorMessage = 'Le numéro de CIN doit contenir exactement 8 chiffres.';
      return;
    }

    if (!this.certificatDecesFile || !this.cinDecesFile) {
      this.errorMessage = 'Veuillez fournir les images du certificat de décès et de la CIN.';
      return;
    }

    // Simulate form submission
    const formData = new FormData();
    formData.append('dateDeces', this.dateDeces);
    formData.append('heureDeces', this.heureDeces);
    formData.append('nomMedecin', this.nomMedecin);
    formData.append('nomClient', this.nomClient);
    formData.append('cinClient', this.cinClient);
    formData.append('certificatDeces', this.certificatDecesFile);
    formData.append('cinDeces', this.cinDecesFile);

    console.log('Form Data:', formData);
    this.errorMessage = '';
    alert('Fiche de décès enregistrée avec succès !');
    this.router.navigate(['/payment']), {
      queryParams: { data: JSON.stringify(formData) }};
  }
}



