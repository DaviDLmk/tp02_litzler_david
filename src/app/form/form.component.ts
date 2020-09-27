import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  utilisateurForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private utilisateurService: UtilisateurService, private router: Router){}

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.utilisateurForm
 = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      civilite: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.utilisateurForm
.value;
    const newUtilisateur = new Utilisateur(
      formValue['nom'],
      formValue['prenom'],
      formValue['adresse'],
      formValue['codePostal'],
      formValue['ville'],
      formValue['telephone'],
      formValue['mail'],
      formValue['civilite'],
      formValue['login'],
      formValue['password'],
      formValue['password2']
    );
    if(newUtilisateur.password === newUtilisateur.password2){
      this.utilisateurService.addUtilisateur(newUtilisateur);
      this.router.navigate(['/utilisateurs']);  
    } else {
      console.log("mot de passe éroné");
    }
  }
}