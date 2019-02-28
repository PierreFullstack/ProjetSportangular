import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AfficheEventComponent } from './affiche-event/affiche-event.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficheEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
