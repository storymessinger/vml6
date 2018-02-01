import { SidebarScrollService } from './../../../services/sidebar-scroll.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, ElementRef, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MembersService } from '../../../services/members.service';
import { Observable } from 'rxjs/Observable';
// import { PageScrollConfig, PageScrollInstance, PageScrollService } from 'ng2-page-scroll';

@Component({
  selector: 'app-member-student',
  templateUrl: './member-student.component.html',
  styleUrls: ['./member-student.component.scss']
})
export class MemberStudentComponent implements OnInit, OnDestroy {

  public imgPath:string = './../../../../assets/Contents/';
  
  data_professor: Observable<any[]>;
  data_postdoc  : Observable<any[]>;
  data_doctor   : Observable<any[]>;
  data_master   : Observable<any[]>;
  data_researcher : Observable<any[]>;
  data_intern   : Observable<any[]>;
  data_alumni_phd: Observable<any[]>;
  data_alumni_master : Observable<any[]>;
  data_former   : Observable<any[]>;

  constructor(
    private sidebarScrollService:SidebarScrollService,
    // private pageScrollService: PageScrollService, 
    private memberService:MembersService, 
    private router:Router,
    @Inject(DOCUMENT) private document: any
    ) { 
      
    //* PageScroll Configuration
    // PageScrollConfig.defaultScrollOffset = 110;
    // PageScrollConfig.defaultDuration = 300;
    //*

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
    // this.mockDataService.getMembers();
    // this.datas = this.mockDataService.people;
     this.data_professor = this.memberService.findMemberByStatus('professor');
     this.data_alumni_master = this.memberService.findMemberByStatus('alumni_master');
     this.data_alumni_phd= this.memberService.findMemberByStatus('alumni_phd');
     this.data_doctor = this.memberService.findMemberByStatus('doctor');
     this.data_master= this.memberService.findMemberByStatus('master');
     this.data_former= this.memberService.findMemberByStatus('former');
     this.data_intern= this.memberService.findMemberByStatus('intern');
     this.data_postdoc= this.memberService.findMemberByStatus('postdoc');
     this.data_researcher= this.memberService.findMemberByStatus('researcher');
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      // this.subscription.unsubscribe();
  }

  routing(id) {
    this.router.navigate(['/main/people/person', id])
  }

}
