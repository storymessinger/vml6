import { PublicationsService } from './../services/publications.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NewsMediaService } from '../services/news-media.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  issues: Observable<any[]>;

  constructor( private ps: PublicationsService) { }

  ngOnInit() {
    this.issues = this.ps.findArgPublications('test');
  }

}
