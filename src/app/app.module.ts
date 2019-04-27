import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{Routes, RouterModule} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'; //add FirestoreSettingsToken when you get this firestore timestampsInSnapshots warning

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactComponent } from './contact/contact.component';
//import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AlertsComponent } from './alerts/alerts.component';


const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path:'legal', component: LegalComponent},
  {path:'connect', component:ConnectComponent},
  {path:'alerts', component:AlertsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LegalComponent,
    ConnectComponent,
    ContactComponent,
    HomeComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
