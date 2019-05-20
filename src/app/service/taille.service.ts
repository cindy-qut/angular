import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taille } from '../class/taille';
import { Globals } from '../globals';



@Injectable({
  providedIn: 'root'
})
export class TailleService {

  constructor(private http: HttpClient) {}

  getAllTailles() {
    return this.http.get<Taille[]>(Globals.APP_API + 'taille');
  }
}

