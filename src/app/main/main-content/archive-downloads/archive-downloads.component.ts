import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
// import { DOCUMENT } from '@angular/platform-browser';
// import { PageScrollService, PageScrollInstance, PageScrollConfig } from 'ng2-page-scroll';
// import { ScrollAbleService } from './../../../shared/scroll-able.service';
import { Component, OnInit, OnDestroy, OnChanges, Inject } from '@angular/core';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { DownloadsService } from '../../../services/downloads.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-archive-downloads',
  templateUrl: './archive-downloads.component.html',
  styleUrls: ['./archive-downloads.component.scss']
})
export class ArchiveDownloadsComponent implements OnInit {

  downloads$: Observable<any[]>;
  id: string;
  subscription: Subscription;
  imgPath:string = './assets/Contents/';

  constructor(
    private sidebarScrollService:SidebarScrollService,
    // private pageScrollService: PageScrollService,
    private router: Router,
    private downloadsService:DownloadsService
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
    this.downloads$ = this.downloadsService.findAllDownloads();
  }

  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }

  navigateTo(link) {
    this.router.navigate([link]);
  }

}

