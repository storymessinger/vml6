import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ProjectsService {

  constructor(private db:AngularFireDatabase) { }


  findAllProjects():Observable<any[]>{
    return this.db.list('projects')
    .valueChanges()
    
    .mergeMap(arr => Observable.from(arr)
      .groupBy( event => event['start'] )
      .mergeMap(group => group.toArray()).map(arr => arr.sort(compare))
      .toArray()
      .do(console.log)
      .map(arr => arr.reverse())
      .do(console.log)
    )
  }


  findProjectById(id): Observable<any[]> {
    return this.db.list('projects', ref => ref.orderByChild('id').equalTo(id))
    .valueChanges()
    .first()
  }

}

function compare(a, b) {

  let idA =  a.date_start.slice(0,10).split('-').join('');
  let idB =  b.date_start.slice(0,10).split('-').join('');
  let comparison = 0;

  if (idA > idB) {
    comparison = -1;
  } else if (idA < idB) {
    comparison = 1;
  }

  return comparison;
}

