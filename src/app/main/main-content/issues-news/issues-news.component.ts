// import { MockDataService } from './../../../shared/mockdata.service';
// import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
// import * as _ from 'underscore';
// import { Subscription } from 'rxjs/Rx';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { NewsMediaService } from '../../../services/news-media.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-issues-news',
  templateUrl: './issues-news.component.html',
  styleUrls: ['./issues-news.component.scss']
})
export class IssuesNewsComponent implements OnInit,  OnDestroy {

  // datas:any;
  id: string;
  // subscription:Subscription;
  imgPath:string = './assets/Contents/';
  selectedImage;

  news$ : Observable<any[]>;

  constructor(
    // private mockDataService:MockDataService,
    private sidebarScrollService:SidebarScrollService,
    private newsMediaService:NewsMediaService
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
   
  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }

  ngOnInit() {
    // this.mockDataService.getIssues();
    // this.datas = this.mockDataService.news;
      this.news$ = this.newsMediaService.findNewsMedia("news")
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
