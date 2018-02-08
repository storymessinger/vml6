import { ProjectsService } from './../../../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-research-projects-individual',
  templateUrl: './research-projects-individual.component.html',
  styleUrls: ['./research-projects-individual.component.scss']
})
export class ResearchProjectsIndividualComponent implements OnInit {

  imgPath:string = './../../../..//assets/Contents/';
  subscription: Subscription;
  
  related_datas:any;
  current_id:number;
  id: number;

  
  project$: Observable<any[]>;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private projectsService:ProjectsService
  ) { 
        // (param:any) => {
        //   this.id = parseInt(param['id']);
          // if ( this.current_id == undefined ) {
          //   this.current_id = this.id;
          // }
          // if (this.id != this.current_id) {
          //   location.reload();
          // } else {
          //   this.current_id = this.id;
          // }
        // })
  }

  ngOnInit() {
    // this.mockDataService.getProjects(this.id);
    // this.datas = this.mockDataService.projects_individual;
    // this.related_datas = this.mockDataService.projects_individual_related;
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        let ID :number = parseInt(param['id']);
        this.project$ = this.projectsService.findProjectById(ID)
      })
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

}
