import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { Http, HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AfficheEventComponent } from './affiche-event/affiche-event.component';
import { LoginComponent } from './login/login.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { UsercoService } from './userco.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { EmailService } from './email.service';


@NgModule({
  declarations: [
    AppComponent,
    AfficheEventComponent,
    LoginComponent,
    CreationEventComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",redirectTo: '/login', pathMatch: 'full'
      },
      {
        path: "afficheevent",
        component: AfficheEventComponent
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "creationevent",
        component: CreationEventComponent
      },
      {
        path: "inscription",
        component: InscriptionComponent
      },
    ])
  ],
  providers: [UsercoService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
