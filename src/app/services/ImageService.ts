import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:8085/funeraille/api/image';  // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Fonction pour uploader une image
  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post(`${this.apiUrl}/upload`, formData,{
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    });
  }

  // Fonction pour obtenir les détails de l'image
  getImageDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/info/${id}`);
  }

  // Fonction pour charger une image
  loadImage(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/load/${id}`, { responseType: 'blob' });
  }

  // Fonction pour supprimer une image
  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  
  // Fonction pour mettre à jour une image (par exemple, remplacer une image existante)
  updateImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.put(`${this.apiUrl}/update`, formData);
  }
}
