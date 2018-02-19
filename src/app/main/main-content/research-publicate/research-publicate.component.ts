import { DOCUMENT} from '@angular/common';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Subscription } from 'rxjs/Rx';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { PublicationsService } from '../../../services/publications.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-research-publicate',
  templateUrl: './research-publicate.component.html',
  styleUrls: ['./research-publicate.component.scss']
})
export class ResearchPublicateComponent implements OnInit {


  id: string;
  subscription: Subscription;
  imgPath:string = './../../../../assets/Contents/';


  pubs$:Observable<any[]>;


  constructor(
    private sidebarScrollService:SidebarScrollService,
    private publicationsService:PublicationsService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
    ) {
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    this.subscription = this.sidebarScrollService.getScroll()
      .subscribe(name => { 
        this.clickScrollTo(name);
      })

   }

  ngOnInit() {
    this.pubs$ = this.publicationsService.findArgPublications('international');
  }

  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }

}

