import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';



@Injectable()
export class UtilisateurService {
  private utilisateurs: Utilisateur[] = [];
  utilisateurSubject = new Subject<Utilisateur[]>();

  emitUtilisateurs() {
    this.utilisateurSubject.next(this.utilisateurs.slice());
  }

  addUtilisateur(Utilisateur: Utilisateur) {
    this.utilisateurs.push(Utilisateur);
    this.emitUtilisateurs();
  }

  constructor() { }

}