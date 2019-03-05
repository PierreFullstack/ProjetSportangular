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
import { ZoomEventComponent } from './zoom-event/zoom-event.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GroupesComponent } from './groupes/groupes.component';


@NgModule({
  declarations: [
    AppComponent,
    AfficheEventComponent,
    LoginComponent,
    CreationEventComponent,
    ZoomEventComponent,
    InscriptionComponent,
    GroupesComponent
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
        path: "zoomevent",
        component: ZoomEventComponent
      },
      {
        path: "inscription",
        component: InscriptionComponent
      },
      {
        path: "groupes",
        component: GroupesComponent
      }
    ])
  ],
  providers: [UsercoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
