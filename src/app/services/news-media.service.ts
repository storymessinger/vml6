import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatDrawerToggleResult } from '@angular/material';

@Injectable()
export class NewsMediaService {
  
  private subject = new BehaviorSubject<any[]>([]);
  
  issues$: Observable<any[]> = this.subject.asObservable();

  constructor(private db: AngularFireDatabase) { 
  }

  findAllIssues(): Observable<any[]> {
    return this.db.list('issues/news', ref => ref.limitToLast(7))
      .valueChanges()
      .first()
      .map(array => array.reverse())
  }

  findAllLife(): Observable<any[]> {
  return this.db.list('lifes', ref => ref.orderByChild('year'))
    .valueChanges()   
    .map(array => array.reverse())
  }
  
  
  findNewsMedia(category){  
    // return this.db.list('issues/' + category, ref => ref.orderByChild('date'))
    // .valueChanges()
    // .map(arr => arr.reverse())
    

    return this.db.list('issues/' + category)
    // return this.db.list('issues/' + category, ref => ref.orderByChild('date'))
    .valueChanges()
    
    .mergeMap(arr => Observable.from(arr)
    .groupBy( event => event['year'] )
    .mergeMap(group => group.toArray()).map(arr => arr.sort(compare).reverse())
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
