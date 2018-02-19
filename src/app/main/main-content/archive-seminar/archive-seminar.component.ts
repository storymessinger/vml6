import { Observable } from 'rxjs/Observable';
import { SeminarsService } from './../../../services/seminars.service';
import { DOCUMENT } from '@angular/platform-browser';
// import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { Component, OnInit, Inject } from '@angular/core';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';

@Component({
  selector: 'app-archive-seminar',
  templateUrl: './archive-seminar.component.html',
  styleUrls: ['./archive-seminar.component.scss']
})
export class ArchiveSeminarComponent implements OnInit {


  seminars$:Observable<any[]>;
  id: string;
  subscription: Subscription;
  imgPath:string = './assets/Contents/';

  constructor(
    private sidebarScrollService:SidebarScrollService,
    private seminarsService:SeminarsService
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
    this.seminars$ = this.seminarsService.findAllSeminar();

  }

  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }
}

