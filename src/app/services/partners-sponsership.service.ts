import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

@Injectable()
export class PartnersSponsershipService {

  constructor(private db:AngularFireDatabase) { }

  findMainPartner(): Observable<any[]> {
    return this.db.list('partners', ref => ref.orderByChild('main').equalTo(1))
    .valueChanges()
    .first()
    .do(console.log)
  
  }

  findPartner(category): Observable<any[]> {
    return this.db.list('partners', ref => ref.orderByChild('type').equalTo(category))
      .valueChanges()
      .first()
  }

  findSponsor(category){
    return this.db.list('sponsorship/' + category)
      .valueChanges()
      
      .mergeMap(arr => Observable.from(arr)
      .groupBy( event => event['year'] )
      .mergeMap(group => group.toArray()).map(arr => arr.sort().reverse())
      .toArray()
      .map(arr => arr.reverse())

  )}
}
