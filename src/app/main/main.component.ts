import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT} from '@angular/common';
import { PageScrollService, PageScrollConfig, PageScrollInstance } from 'ng2-page-scroll';
import { Inject, ViewChild, ElementRef } from '@angular/core';
import { SidebarScrollService } from '../services/sidebar-scroll.service';
import { Subscription } from 'rxjs/rx';

@Component({
  // selector: 'app-main', // you dont need this
  templateUrl: './main.component.html',
  styles: [`
  `]
})
export class MainComponent implements OnInit {

  public sidebarState:boolean = false; //default is false
  public isMouseOnSidebar:boolean;
  subscription: Subscription;
  public initLink:any;
  
  constructor(
    private router:Router, 
    private sidebarScrollService:SidebarScrollService,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any ) { 
    
    PageScrollConfig.defaultScrollOffset = 110;
    PageScrollConfig.defaultDuration = 300;
    this.subscription = this.sidebarScrollService.getScroll()
      .subscribe(name => { 
        this.clickScrollTo(name);
      })

    switch(document.location.pathname) {
        case '/main/info':
          this.initLink= "About";
          break;
        case '/main/people':
          this.initLink= "People";
          break;
        case '/main/area':
          this.initLink= "Research";
          break;
        case '/main/news':
          this.initLink= "News";
          break;
        case '/main/seminar':
          this.initLink= "Archive";
          break;
        default:
          break;
    }
  }


  ngOnInit() {
         this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  }

  onClicked(event) {
    this.sidebarState = event;
  }

  clickScrollTo(name) {
    let scrollTo = '#' + name;
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }



}

