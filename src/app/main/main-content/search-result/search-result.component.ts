import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import * as Fuse from 'fuse.js'
// import { MockDataService } from './../../../shared/mockdata.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, DoCheck {

  private people_options = { 
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "name",
    ]
  } 
  private publications_options = { 
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "title",
        "teams.name",
        "authors.name"
    ]
  } 
  private projects_options= { 
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "name",
        "team.shortname",
        "people.name",
        "partner.name"
    ]
  } 

  subscription: Subscription;
  id: string;
  current_id;
  imgPath:string = './assets/Contents/';

  people:any;
  result_people:any;
  publications:any;
  result_publications:any;
  projects:any;
  result_projects:any;

  fuse_people;
  fuse_publications;
  fuse_projects;

  constructor(
    // private mockDataService:MockDataService,
    private db: AngularFireDatabase,
    private activatedRoute:ActivatedRoute,
    private http:Http,
    private router:Router
    ) { 
      this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.id = param['id'];
          if ( this.current_id == undefined ) {
            this.current_id = this.id;
          }
          if (this.id != this.current_id) {
            location.reload();
          } else {
            this.current_id = this.id;
          }
        })


      this.defineQuery();
    }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.fuse_people !== undefined && this.fuse_projects !== undefined && this.fuse_publications !== undefined){
      this.findPeople(this.id);
      this.findPublications(this.id);
      this.findProjects(this.id);
    }
  }

  defineQuery() {
    this.db.list('people')
      .valueChanges()
      .first()
      .subscribe( val => this.fuse_people = new Fuse(val, this.people_options))

    this.db.list('publications')
      .valueChanges()
      .first()
      .subscribe( val => this.fuse_publications = new Fuse(val, this.publications_options))

    this.db.list('projects')
      .valueChanges()
      .first()
      .subscribe( val => this.fuse_projects = new Fuse(val, this.projects_options))
  }

  findPeople(query) {
    this.result_people = this.fuse_people.search(query);
  }

  findPublications (query) {
    this.result_publications = this.fuse_publications.search(query);
  }

  findProjects (query) {
    this.result_projects = this.fuse_projects.search(query);
  }
  
  routing(arg, id, diff = null) {
    if (arg == "person") {
      this.router.navigate(['/main/people/person', id])
    } else if ( arg == "publications") {
      switch(diff) {
          case "international":
            this.router.navigate(['main/international/individual', id])
            break;
          case "domestic":
            this.router.navigate(['main/domestic/individual', id])
            break;
          case "thesis":
            this.router.navigate(['main/thesis/individual', id])
            break;
          default:
            break;
      }
    } else if ( arg == "projects") {
      this.router.navigate(['/main/projects/individual', id])
    }

  }
}

