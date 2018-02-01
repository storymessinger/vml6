import { AboutSponserComponent } from './main-content/about-sponser/about-sponser.component';
import { AboutAdmissionComponent } from './main-content/about-admission/about-admission.component';
import { AboutPartnersComponent } from './main-content/about-partners/about-partners.component';
import { AboutInfoComponent } from './main-content/about-info/about-info.component';
import { IssuesLifeComponent } from './main-content/issues-life/issues-life.component';
import { IssuesNewsComponent } from './main-content/issues-news/issues-news.component';
import { IssuesMediaComponent } from './main-content/issues-media/issues-media.component';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { MemberStudentComponent } from "./main-content/member-student/member-student.component";
import { MemberStudentIndividualComponent } from './main-content/member-student-individual/member-student-individual.component';
import { ResearchAreaComponent } from './main-content/research-area/research-area.component';
import { ResearchAreaIndividualComponent } from './main-content/research-area-individual/research-area-individual.component';
import { ResearchProjectsComponent } from './main-content/research-projects/research-projects.component';
import { ResearchProjectsIndividualComponent } from './main-content/research-projects-individual/research-projects-individual.component';

const APP_ROUTES: Routes = [
     { 
        path: 'main',
        component: MainComponent,
        data: {}
        ,children: [
            {   path: 'info', 
                component: AboutInfoComponent,
                data: { breadcrumb: "About us" }
            },
            {   path: 'admission', 
                component: AboutAdmissionComponent,
                data: { breadcrumb: "Admission" }
            },
            {   path: 'partners', 
                component: AboutPartnersComponent,
                data: { breadcrumb: "Partners" }
            },
            {   path: 'sponsorship', 
                component: AboutSponserComponent,
                data: { breadcrumb: "Sponsorship" }
            },
            {   path: 'people', 
                component: MemberStudentComponent       ,
                data: { breadcrumb: "People" }, 
                pathMatch: 'full'
            },
            {   path: 'people', 
                data: { breadcrumb: "People" }, 
                children: [
                    {   path: 'person/:id', 
                        component: MemberStudentIndividualComponent,
                        data: { breadcrumb: "Individual Page" }
                    }
                ]
            },
            {   path: 'area', 
                component: ResearchAreaComponent, 
                data: { breadcrumb: "Research Areas" },
                pathMatch: 'full'
            },
            {   path: 'area', 
                data: { breadcrumb: "Research Areas" }, 
                children: [
                    {   path: 'teams/:id', 
                        component: ResearchAreaIndividualComponent,
                        data: { breadcrumb: "Teams" }
                    }
                ]
            },
            {   path: 'projects', 
                component: ResearchProjectsComponent, 
                data: { breadcrumb: "Projects" }
            },
            {   path: 'projects', 
                data: { breadcrumb: "Projects" }, 
                children: [
                    {   path: 'individual/:id', 
                        component: ResearchProjectsIndividualComponent,
                        data: { breadcrumb: "Individual Project" }
                    }
                ]
            },
        //     {   path: 'international', 
        //         component: ResearchPublicateComponent, 
        //         data: { breadcrumb: "Publications (Intl.)" }
        //     },
        //     {   path: 'international', 
        //         data: { breadcrumb: "Publications (Intl.)" }, 
        //         children: [
        //             {   path: 'individual/:id', 
        //                 component: ResearchPublicateIndividualComponent,
        //                 data: { breadcrumb: "Individual" }
        //             }
        //         ]
        //     },
        //     {   path: 'domestic', 
        //         component: ResearchPublicateKrComponent, 
        //         data: { breadcrumb: "Publications (Domestic)" }
        //     },
        //     {   path: 'domestic', 
        //         data: { breadcrumb: "Publications (Domestic)" }, 
        //         children: [
        //             {   path: 'individual/:id', 
        //                 component: ResearchPublicateIndividualComponent,
        //                 data: { breadcrumb: "Individual" }
        //             }
        //         ]
        //     },
        //     {   path: 'thesis', 
        //         component: ResearchThesisComponent, 
        //         data: { breadcrumb: "Theses" }
        //     },
        //     {   path: 'thesis', 
        //         data: { breadcrumb: "Theses" }, 
        //         children: [
        //             {   path: 'individual/:id', 
        //                 component: ResearchPublicateIndividualComponent,
        //                 data: { breadcrumb: "Individual" }
        //             }
        //         ]
        //     },
            {   path: 'news', 
                component: IssuesNewsComponent,
                data: { breadcrumb: "News" }
            },
            {   path: 'media', 
                component: IssuesMediaComponent, 
                data: { breadcrumb: "Media" }
            },
            {   path: 'life', 
                component: IssuesLifeComponent, 
                data: { breadcrumb: "VML Life" }
            }
        //     {   path: 'downloads', 
        //         component: ArchiveDownloadsComponent, 
        //         data: { breadcrumb: "Downloads" },
        //         pathMatch: 'full'
        //     },
        //     {   path: 'seminar', 
        //         component: ArchiveSeminarComponent, 
        //         data: { breadcrumb: "Weekly Seminars" },
        //         pathMatch: 'full'
        //     },
        //     {   path: 'search/:id', 
        //         component: SearchResultComponent,
        //         data: { breadcrumb: "Search Result" },
        //     }

        ]
    }
];

export const routing = RouterModule.forChild(APP_ROUTES);


