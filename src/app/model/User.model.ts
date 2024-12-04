export class User {
    id: number | null;
    nom: string;
    prenom: string;
    tel: string;
    adresse: string;
    dateDeNaissance: string;
    email: string;
    password: string;
    active: boolean;
    role: string;
  
    constructor(
      id: number | null = null,
      nom: string = '',
      prenom: string = '',
      tel: string = '',
      adresse: string = '',
      dateDeNaissance: string = '',
      email: string = '',
      password: string = '',
      active: boolean = false,
      role: string = 'user'
    ) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.tel = tel;
      this.adresse = adresse;
      this.dateDeNaissance = dateDeNaissance;
      this.email = email;
      this.password = password;
      this.active = active;
      this.role = role;
    }
  }
  