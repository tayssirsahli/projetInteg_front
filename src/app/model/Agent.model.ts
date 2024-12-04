export class Agent {
  id: number | undefined;
  nom: string = '';
  prenom: string = '';
  tel: string = '';
  adresse: string = '';
  dateDeNaissance: Date | undefined;
  email: string = '';
  password: string = '';
  service: string;

  constructor(
    nom: string,
    prenom: string,
    tel: string,
    adresse: string,
    dateDeNaissance: Date,
    email: string,
    password: string,
    service: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
    this.adresse = adresse;
    this.dateDeNaissance = dateDeNaissance;
    this.email = email;
    this.password = password;
    this.service = service;
  }
}
