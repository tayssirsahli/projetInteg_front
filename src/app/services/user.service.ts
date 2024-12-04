import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from 'app/model/medecin.model'; // Assurez-vous d'importer le modèle Medecin

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://localhost:8085/funeraille'; // Changez selon votre backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les médecins
  getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${this.baseUrl}/medecins`);  // Assurez-vous que ce chemin correspond à votre API backend
  }

  // Activer un utilisateur
  validateUser(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/validate/${id}`, {});  // URL correcte pour activer l'utilisateur
  }

  // Désactiver un utilisateur
  deactivateUser(id: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/deactivate/${id}`, {});  // URL correcte pour désactiver l'utilisateur
  }

  // Récupérer les utilisateurs par rôle (médecin, agent, laveur, etc.)
  getUsersByRole(role: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/role/${role}`);
  }

  // Authentification de l'utilisateur
  login(email: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/auth/login`, { email, password });
  }

  registerMedecin(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/medecin`, formData,
      {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    }
    );
  }

  // Envoi des données au backend pour le rôle Agent
  registerAgent(agent: any): Observable<any> {
    console.log(agent);
    return this.http.post(`${this.baseUrl}/register/agent`, agent, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    });
}


  // Envoi des données au backend pour le rôle Laveur
  registerLaveur(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/laveur`, formData);
  }

  // Optionnel: Autres méthodes pour interagir avec votre API, comme la récupération d'utilisateurs par rôle
 /*  getUsersByRole(role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/role/${role}`);
  } */
  
}
