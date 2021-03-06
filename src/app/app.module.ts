import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { Http, HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AfficheEventComponent } from './affiche-event/affiche-event.component';
import { LoginComponent } from './login/login.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { UsercoService } from './userco.service';
import { ZoomEventComponent } from './zoom-event/zoom-event.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GroupesComponent } from './groupes/groupes.component';
import { EmailService } from './email.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AfficheMesEventsComponent } from './affiche-mes-events/affiche-mes-events.component';
import { ModifEventComponent } from './modif-event/modif-event.component';
import { AfficheParticipationEventComponent } from './affiche-participation-event/affiche-participation-event.component';
import { TrisportService } from './trisport.service';
import { ArchivesComponent } from './archives/archives.component';


@NgModule({
  declarations: [
    AppComponent,
    AfficheEventComponent,
    LoginComponent,
    CreationEventComponent,
    ZoomEventComponent,
    InscriptionComponent,
    GroupesComponent,
    MenuBarComponent,
    AfficheMesEventsComponent,
    ModifEventComponent,
    AfficheParticipationEventComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
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
      },
      {
        path: "affichemesevents",
        component: AfficheMesEventsComponent
      },
      {
        path: "modifevent",
        component: ModifEventComponent
      },
      {
        path: "affichemesparticipations",
        component: AfficheParticipationEventComponent
      },
      {
        path: "archives",
        component: ArchivesComponent
      }
    ])
  ],
  providers: [UsercoService, EmailService, TrisportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
