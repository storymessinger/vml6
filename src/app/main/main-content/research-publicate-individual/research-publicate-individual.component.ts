// import { ProjectpageHttpService } from '../../../shared/projectpage-http.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../../services/publications.service';
// import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-research-publicate-individual',
  templateUrl: './research-publicate-individual.component.html',
  styleUrls: ['./research-publicate-individual.component.scss']
})

export class ResearchPublicateIndividualComponent implements OnInit {

  subscription: Subscription;
  id: number;
  imgPath:string = './assets/Contents/';
  // individual$: Observable<any>;

  pubs$: Observable<any[]>;
  pubs;

  constructor(
    private activatedRoute:ActivatedRoute,
    private publicationService:PublicationsService
    // private projectpageHttpService:ProjectpageHttpService
    ) { 
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        let ID :number = parseInt(param['id']);
        this.pubs$ = this.publicationService.findPublicationById(ID)
      })
  }

  ngOnInit() {
    this.pubs$.subscribe( val => this.pubs = val);
    // this.mockDataService.getPublication('whole',this.id);
    // this.datas = this.mockDataService.publication_individual;

    // this.individual$ = this.projectpageHttpService.findById(this.id);
  }

}


