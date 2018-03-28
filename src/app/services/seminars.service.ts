import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class SeminarsService {

  constructor(private db:AngularFireDatabase) { }

  findAllSeminar():Observable<any[]> {
    return this.db.list('seminars')
    .valueChanges()
      .mergeMap(arr => Observable.from(arr)
        .groupBy( event => event['year'] )
        .mergeMap(group => group.toArray()).map(arr => arr.sort(compare))
        .toArray()
        .map(arr => arr.reverse()) 
      )
  }
}

function compare(a, b) {
  const dateA = parseInt(a.date);
  const dateB = parseInt(b.date);

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}

