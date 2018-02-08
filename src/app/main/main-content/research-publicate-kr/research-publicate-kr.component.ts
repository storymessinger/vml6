  // import { DOCUMENT } from '@angular/platform-browser';
// import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
// import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { PublicationsService } from '../../../services/publications.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-research-publicate-kr',
  templateUrl: './research-publicate-kr.component.html',
  styleUrls: ['./research-publicate-kr.component.scss']
})
export class ResearchPublicateKrComponent implements OnInit {

  id: string;
  subscription: Subscription;
  imgPath:string = './../../../../assets/Contents/';


  pubs$:Observable<any[]>;


  constructor(
    private sidebarScrollService:SidebarScrollService,
    private publicationsService:PublicationsService
    // private pageScrollService: PageScrollService,
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
    this.pubs$ = this.publicationsService.findArgPublications('domestic');
  }

  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }

}

