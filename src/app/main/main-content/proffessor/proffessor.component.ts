import { MembersService } from './../../../services/members.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-proffessor',
  templateUrl: './proffessor.component.html',
  styleUrls: ['./proffessor.component.scss']
})
export class ProffessorComponent implements OnInit {

  person$: Observable<any>;
  interest$: Observable<any>;
  education$: Observable<any>;
  appointment$: Observable<any>;
  present$: Observable<any>;

  imgPath:string = './assets/Contents/';

  constructor(
    private db:AngularFireDatabase,
    private membersService:MembersService
  ) { }

  ngOnInit() {
    this.person$ = this.membersService.findMemberById(1)
    this.interest$ = this.findByType('interest')
    this.education$ = this.findByType('education')
    this.appointment$ = this.findByType('appointment')
    this.present$ = this.findByType('Present')

  }

  // interest, education, appointment, Present
  
  findByType(type:string): Observable<any[]> {
    console.log('test');
    return this.db.list('professor', ref => ref.orderByChild('type').equalTo(type))
    .valueChanges()
    .map(arr => arr.sort(compareID).reverse())
    .first()
    .do(console.log)
  }

  navigateToBook() {
    window.location.href = 'http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788956244501&orderClick=JAj';
  }

}

function compareID(a, b) {

  const idA =  a.id
  const idB =  b.id

  let comparison = 0;
  if (idA > idB) {
    comparison = 1;
  } else if (idA < idB) {
    comparison = -1;
  }
  return comparison;
}
