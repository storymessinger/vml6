// import { ProjectpageHttpService } from '../../../shared/projectpage-http.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../../services/publications.service';
// import { MockDataService } from './../../../shared/mockdata.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  videoURL = 'https://www.youtube.com/embed/QYHuXiTzNl8?rel=0';
  safeURL;

  subImg;


  constructor(
    private activatedRoute:ActivatedRoute,
    private publicationService:PublicationsService,
    private _sanitizer: DomSanitizer
    // private projectpageHttpService:ProjectpageHttpService
    ) { 
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        let ID :number = parseInt(param['id']);
        this.pubs$ = this.publicationService.findPublicationById(ID)
      })

  }

  ngOnInit() {
    this.pubs$.subscribe( val => {
      this.pubs = val;
      this.videoURL = this.pubs[0].youtube;
      if( this.videoURL ) {
        let key = this.videoURL.split('=')[1]
        let URL = 'https://www.youtube.com/embed/' + key + '?rel=0';
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(URL);
      }
    });
  }

}


