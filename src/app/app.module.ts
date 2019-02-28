import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';


import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';


import { AfficheEventComponent } from './affiche-event/affiche-event.component';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent,
    AfficheEventComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
      MatMenuModule,
      FormsModule,
      MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
