import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taille } from '../class/taille';
import { Globals } from '../globals';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class TailleService {

  constructor(private http: HttpClient, private router: Router) {}

  getAllTailles() {
    return this.http.get<Taille[]>(Globals.APP_API + 'taille');
  }

  getTailleById(id: number) {
    return this.http.get(Globals.APP_API + 'taille' + '/' + id);
  }

  deleteTaille(id: number) {
    return this.http.delete(Globals.APP_API + 'taille' + '/' + id);
  }

  createTaille(dimensions: string) {
  const data = {dimensions};
  return this.http.post(Globals.APP_API + 'taille' + '/' + 'new', data );
  }
}

