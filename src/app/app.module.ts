import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { TeteComponent } from './tete/tete.component';
import { FooterComponent } from './footer/footer.component';
import { RecapComponent } from './recap/recap.component';
import { UtilisateurService } from './services/utilisateur-service.service';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { PhoneNumberPipe } from './phone-number.pipe';

const appRoutes: Routes = [
  {path: 'utilisateur', component: UtilisateurListComponent},
  {path: 'formulaire', component: FormComponent},
  {path: 'tetiere', component: TeteComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', component: FormComponent}

];


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, FormComponent, TeteComponent, FooterComponent, RecapComponent, UtilisateurListComponent, PhoneNumberPipe ],
  bootstrap:    [ AppComponent ],
  providers: [UtilisateurService]
})
export class AppModule { }
