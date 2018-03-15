import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Injectable()
export class MembersService {

  constructor(private db:AngularFireDatabase) { }

  findAllMembersGroups(): Observable<any[]> {
    return this.db.list('people')
      .valueChanges()
      .first()
  }

  
  findMemberByStatus(status:string): Observable<any[]> {
    return this.db.list('people', ref => ref.orderByChild('type').equalTo(status))
    // .map( data => data[0])
    .valueChanges()
    .map(arr => arr.sort(compare).reverse())
    .do(console.log)
    .first()
  }

  findMemberById(id:number) : Observable<any[]> {
    return this.db.list('people', ref => ref.orderByChild('id').equalTo(id))
    .valueChanges()
    .first()
  }

}


function compare(a, b) {

  let dateA;
  let dateB;
  let comparison = 0;

  if(a.graduation_date && b.graduation_date) {
    dateA =  a.graduation_date
    dateB =  b.graduation_date

    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
  } else {
    dateA =  a.admission_date
    dateB =  b.admission_date

    if (dateA > dateB) {
      comparison = -1;
    } else if (dateA < dateB) {
      comparison = 1;
    }
  }

  return comparison;
}