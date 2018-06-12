import { DOCUMENT } from '@angular/platform-browser';
// import { PageScrollInstance, PageScrollService, PageScrollConfig } from 'ng2-page-scroll';

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { NewsMediaService } from '../../../services/news-media.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-issues-media',
  templateUrl: './issues-media.component.html',
  styleUrls: ['./issues-media.component.scss']
})
export class IssuesMediaComponent implements OnInit, OnDestroy {

  issues$ : Observable<any[]>;
  
  id: string;
  imgPath:string = './assets/Contents/';
  selectedImage;

  // private subscription: Subscription;

  constructor(
    private sidebarScrollService:SidebarScrollService,
    private newsMediaService: NewsMediaService
    
    // private pageScrollService: PageScrollService, 
    // @Inject(DOCUMENT) private document: any
    ) {
      // PageScrollConfig.defaultScrollOffset = 110;
      // PageScrollConfig.defaultDuration = 300;
      // this.subscription = this.sidebarScrollService.getScroll()
      //   .subscribe(name => { 
      //     this.clickScrollTo(name);
      // })
   }

  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }

  ngOnInit() {
    // this.mockDataService.getIssues();
    // this.datas = this.mockDataService.medias;
      this.issues$ = this.newsMediaService.findNewsMedia("media")
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      // this.subscription.unsubscribe();
  }

  setSelectedImage(image){
      // this.selectedImage = image;	
      this.selectedImage = image.split('_thumb')[0]+'.jpg';
   }

}
