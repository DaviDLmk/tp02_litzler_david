import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  utilisateurForm : FormGroup ;

  constructor(private formBuilder: FormBuilder, private utilisateurService: UtilisateurService, private router: Router){}

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.utilisateurForm =new FormGroup ({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      codePostal: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      civilite: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
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