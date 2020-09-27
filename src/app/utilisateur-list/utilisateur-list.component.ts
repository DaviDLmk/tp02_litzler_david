import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Subscription } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur-service.service';


@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit, OnDestroy {

  utilisateurs: Utilisateur[];
  utilisateurSubscription: Subscription;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurSubscription = this.utilisateurService.utilisateurSubject.subscribe((utilisateurs: Utilisateur[]) => {
      this.utilisateurs = utilisateurs;
    }
  );
  this.utilisateurService.emitUtilisateurs();

  }
  ngOnDestroy() {
    this.utilisateurSubscription.unsubscribe();
  }
}