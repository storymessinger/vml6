import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class PublicationsService {

  constructor(private db:AngularFireDatabase) { }

  findPublicationsForHome(arg): Observable<any[]> {
    return this.db.list('publications', ref => ref.orderByChild('type').equalTo('international').limitToLast(3))
      .valueChanges()
      .first()
      .map(array => array.reverse())
  }

  findArgPublications(arg): Observable<any[]> {
    return this.db.list('publications', ref=> ref.orderByChild('type').equalTo(arg))
      .valueChanges()
      .mergeMap(arr => Observable.from(arr)
        .groupBy( event => event['year'] )
        .mergeMap(group => group.toArray()).map(arr => arr.sort().reverse())
        .toArray()
        // .map(arr => arr.reverse()) //??????
      )
  }

  findPublicationById(id): Observable<any[]> {
    return this.db.list('publications', ref => ref.orderByChild('id').equalTo(id))
    .valueChanges()
    .first()
  }
}
