export class Laveur {
  id: number | undefined;   // Identifiant unique du laveur, probablement généré par la base de données
  nom: string = '';         // Nom du laveur
  prenom: string = '';      // Prénom du laveur
  tel: string = '';         // Numéro de téléphone du laveur
  adresse: string = '';     // Adresse du laveur
  dateDeNaissance: Date | undefined; // Date de naissance du laveur
  email: string = '';       // Email du laveur
  password: string = '';    // Mot de passe du laveur
  genre: string = '';       // Genre du laveur, spécifique à la classe Laveur
  
  constructor(
    nom: string, 
    prenom: string, 
    tel: string, 
    adresse: string, 
    dateDeNaissance: Date, 
    email: string, 
    password: string, 
    genre: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
    this.adresse = adresse;
    this.dateDeNaissance = dateDeNaissance;
    this.email = email;
    this.password = password;
    this.genre = genre;
  }
}
