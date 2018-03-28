import { ProjectsService } from './../../../services/projects.service';
import { Subscription } from 'rxjs/Rx';
// import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {

  id: string;
  subscription: Subscription;
  imgPath:string = './assets/Contents/';
  projects$: Observable<any[]>;

  constructor(
    private scrollAbleService: SidebarScrollService,
    private projectsService:ProjectsService,
    // private pageScrollService: PageScrollService, 
    private router:Router,
    // @Inject(DOCUMENT) private document: any
    ) {
    // PageScrollConfig.defaultScrollOffset = 110;
    // PageScrollConfig.defaultDuration = 300;
    // this.subscription = this.sidebarScrollService.getScroll()
    //   .subscribe(name => { 
    //     this.clickScrollTo(name);
    //   })
   }


  ngOnInit() {
    // this.mockDataService.getProjects();
    // this.datas = this.mockDataService.projects;
    this.projects$ = this.projectsService.findAllProjects();
  }

  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }

  ngOnDestroy() {
  }

  navigateTo(id) {
    if(typeof(id) == "number") {
      this.router.navigate(['/main/projects/individual', id])
    }
  }

}