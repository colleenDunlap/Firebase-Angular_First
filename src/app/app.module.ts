import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LegalComponent,
    ConnectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
	AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
