import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { TeteComponent } from './tete/tete.component';
import { FooterComponent } from './footer/footer.component';
import { RecapComponent } from './recap/recap.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FormComponent, TeteComponent, FooterComponent, RecapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
