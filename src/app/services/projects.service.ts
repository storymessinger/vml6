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
      .groupBy( event => event['year'] )
      .mergeMap(group => group.toArray()).map(arr => arr.sort().reverse())
      .toArray()
      .map(arr => arr.reverse())
    )
  }


  findProjectById(id): Observable<any[]> {
    return this.db.list('projects', ref => ref.orderByChild('id').equalTo(id))
    .valueChanges()
    .first()
  }

}

