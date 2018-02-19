import { SeminarsService } from './../services/seminars.service';
import { ProjectsService } from './../services/projects.service';
import { PartnersSponsershipService } from './../services/partners-sponsership.service';
import { MembersService } from './../services/members.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DefaultImageDirective } from './../directives/default-image.directive';
import { VideoThumbnailDirective } from './../directives/video-thumbnail.directive';
import { TypeChangePipe } from './../pipes/type-change.pipe';
import { NumToMonthPipe } from './../pipes/num-to-months.pipe';
import { SafeHtmlPipe } from './../pipes/safe-html-pipe';
import { MainComponent } from './main.component';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
// import { SidebarBtnDirective } from './main-sidebar/sidebar-btn.directive';
// import { KeysPipe } from '../shared/keys-pipe';


// import { PageScrollService } from 'ng2-page-scroll';

import { routing } from './main.routing';
// import { MainRoutingModule } from './main-routing.module';

import { SidebarScrollService } from '../services/sidebar-scroll.service';
// import { ProjectpageHttpService } from '../shared/projectpage-http.service';
// import { IndividualHttpService } from '../shared/individual-http.service';

import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
// import { ArchiveSeminarComponent } from './main-content/archive-seminar/archive-seminar.component';
// import { ArchiveDownloadsComponent } from './main-content/archive-downloads/archive-downloads.component';
import { IssuesLifeComponent } from './main-content/issues-life/issues-life.component';
import { IssuesNewsComponent } from './main-content/issues-news/issues-news.component';
// import { ResearchThesisComponent } from './main-content/research-thesis/research-thesis.component';
// import { ResearchPublicateIndividualComponent } from './main-content/research-publicate-individual/research-publicate-individual.component';
// import { ResearchPublicateKrComponent } from './main-content/research-publicate-kr/research-publicate-kr.component';
// import { ResearchPublicateComponent } from './main-content/research-publicate/research-publicate.component';
// import { ResearchProjectsIndividualComponent } from './main-content/research-projects-individual/research-projects-individual.component';
// import { ResearchProjectsComponent } from './main-content/research-projects/research-projects.component';
// import { ResearchAreaIndividualComponent } from './main-content/research-area-individual/research-area-individual.component';
// import { ResearchAreaComponent } from './main-content/research-area/research-area.component';
// import { MemberStudentIndividualComponent } from './main-content/member-student-individual/member-student-individual.component';
import { MemberStudentComponent } from './main-content/member-student/member-student.component';
import { IssuesMediaComponent } from './main-content/issues-media/issues-media.component';
import { AboutPartnersComponent } from './main-content/about-partners/about-partners.component';
import { AboutInfoComponent } from './main-content/about-info/about-info.component';
import { AboutAdmissionComponent } from './main-content/about-admission/about-admission.component';
import { AboutSponserComponent } from './main-content/about-sponser/about-sponser.component';
import { MemberStudentIndividualComponent } from './main-content/member-student-individual/member-student-individual.component';
import { ResearchAreaComponent } from './main-content/research-area/research-area.component';
import { ResearchAreaIndividualComponent } from './main-content/research-area-individual/research-area-individual.component';
import { ResearchProjectsComponent } from './main-content/research-projects/research-projects.component';
import { ResearchProjectsIndividualComponent } from './main-content/research-projects-individual/research-projects-individual.component';
import { TeamsService } from '../services/teams.service';
import { ResearchPublicateComponent } from './main-content/research-publicate/research-publicate.component';
import { ResearchPublicateIndividualComponent } from './main-content/research-publicate-individual/research-publicate-individual.component';
import { ResearchThesisComponent } from './main-content/research-thesis/research-thesis.component';
import { ResearchPublicateKrComponent } from './main-content/research-publicate-kr/research-publicate-kr.component';
import { ArchiveDownloadsComponent } from './main-content/archive-downloads/archive-downloads.component';
import { DownloadsService } from '../services/downloads.service';
import { ArchiveSeminarComponent } from './main-content/archive-seminar/archive-seminar.component';
import { SearchResultComponent } from './main-content/search-result/search-result.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
// import { SearchResultComponent } from './main-content/search-result/search-result.component';
// import { MainComponent } from './main.component';


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { MatInputModule } from '@angular/material'
// import { MatIconModule } from '@angular/material'
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ 
    MainComponent,
    MainNavbarComponent,
    MainSidebarComponent,
    // SidebarBtnDirective,
    AboutAdmissionComponent,
    AboutInfoComponent,
    AboutPartnersComponent,
    MemberStudentComponent,
    AboutSponserComponent,
    MemberStudentIndividualComponent,
    ResearchAreaComponent,
    ResearchAreaIndividualComponent,
    ResearchProjectsComponent,
    ResearchProjectsIndividualComponent,
    ResearchPublicateComponent,
    ResearchPublicateKrComponent,
    ResearchPublicateIndividualComponent,
    ResearchThesisComponent,
    IssuesNewsComponent,
    IssuesMediaComponent,
    IssuesLifeComponent,
    ArchiveDownloadsComponent,
    ArchiveSeminarComponent,
    SearchResultComponent,
    
    // KeysPipe,
    NumToMonthPipe,
    DefaultImageDirective,
    VideoThumbnailDirective,
    TypeChangePipe,
    SafeHtmlPipe
    ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CommonModule,
    routing,
    Ng2PageScrollModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
      SidebarScrollService,
      MembersService,
      PartnersSponsershipService,
      ProjectsService,
      DownloadsService,
      SeminarsService
    // IndividualHttpService,
    // ProjectpageHttpService
]
})
export class MainModule { }
