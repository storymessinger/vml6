import { TeamsService } from './services/teams.service';
import { PublicationsService } from './services/publications.service';
import { NewsMediaService } from './services/news-media.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DefaultImageHomeDirective } from './directives/default-image-home.directive';

import { routing } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatIconModule } from '@angular/material';
// import { ScrollSpyModule } from 'ng2-scrollspy';
// error about OpaqueToken or sth... problem, cannot be used right now
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
// import { VideoThumbnailDirective } from './directives/video-thumbnail.directive';
import { MainModule } from './main/main.module';
import { PartnersSponsershipService } from './services/partners-sponsership.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DefaultImageHomeDirective,
    PageNotFoundComponent,
    HomeComponent,
    TestComponent,
    // VideoThumbnailDirective
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // ScrollSpyModule.forRoot(),
    NgbModule.forRoot(),
    MatIconModule,
    MainModule
  ],
  providers: [
    NewsMediaService,
    PublicationsService,
    TeamsService,
    PartnersSponsershipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
