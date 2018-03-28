import { DomSanitizer } from '@angular/platform-browser';
import { ProjectsService } from './../../../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-research-projects-individual',
  templateUrl: './research-projects-individual.component.html',
  styleUrls: ['./research-projects-individual.component.scss']
})
export class ResearchProjectsIndividualComponent implements OnInit, AfterViewInit {

  imgPath:string = './../../../..//assets/Contents/';
  subscription: Subscription;
  id: number;
  project$: Observable<any[]>;

  demoArr:any[] = [];
  demo1; 
  demo2;
  demo3;
  demo4;
  demo5;

  project;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private projectsService:ProjectsService,
    private _sanitizer: DomSanitizer,
  ) { 
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        let ID :number = parseInt(param['id']);
        this.project$ = this.projectsService.findProjectById(ID)
      })
  }

  ngOnInit() {
    this.project$.subscribe(item => {
      this.project = item;
      console.log(this.project[0]['demo4']);
      console.log(typeof(this.project[0]['demo4']));

      if (this.project[0]['demo1'] !== '') { this.demo1=this.safeCheck(this.project[0]['demo1']) }
      if (this.project[0]['demo2'] !== '') { this.demo2=this.safeCheck(this.project[0]['demo2']) }
      if (this.project[0]['demo3'] !== '') { this.demo3=this.safeCheck(this.project[0]['demo3']) }
      if (this.project[0]['demo4'] !== '') { this.demo4=this.safeCheck(this.project[0]['demo4']) }
      if (this.project[0]['demo5'] !== '') { this.demo5=this.safeCheck(this.project[0]['demo5']) }

      console.log(this.project);
    })

  }

  ngAfterViewInit() {
  }


  navigateTo(arg, id, link=""){
    if (arg == "people") {
      this.router.navigate(['/main/people/person', id])
    } else if (arg == "project") {
      this.router.navigateByUrl('main/projects/individual/'+ id);
    } else if (arg == "partner") {
      window.location.href=link;
    }
  }

  safeCheck(input){
      console.log(input)
      let key = input.split('/').reverse()[0];
      let url = 'https://www.youtube.com/embed/' + key + '?rel=0';
      console.log(url);
      return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
