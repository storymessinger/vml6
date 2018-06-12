import { NewsMediaService } from './../../../services/news-media.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { SidebarScrollService } from '../../../services/sidebar-scroll.service';
import { Observable } from 'rxjs/Observable';
// import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-issues-life',
  templateUrl: './issues-life.component.html',
  styleUrls: ['./issues-life.component.scss']
})
export class IssuesLifeComponent implements OnInit, OnDestroy {


  lifes$: Observable<any[]>;
  imgPath:string = './assets/Contents/';
  datas:any;
  selectedImage;
  // subscription:Subscription;

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
    //   })
  }

  // clickScrollTo(name) {
  //   let scrollTo = '#' + name;
  //   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
  //   this.pageScrollService.start(pageScrollInstance);
  // }

  ngOnInit() {
    this.lifes$ = this.newsMediaService.findAllLife();
    // this.mockDataService.getLife();
    // this.datas = this.mockDataService.life;
  }


  setSelectedImage(image){
      this.selectedImage = image.split('_thumb')[0]+'.jpg';

   }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      // this.subscription.unsubscribe();
  }


}
