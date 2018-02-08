import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DownloadsService {

  constructor(private db:AngularFireDatabase) { }

  findAllDownloads():Observable<any[]>{
    return this.db.list('downloads')
    .valueChanges()
    
    .mergeMap(arr => Observable.from(arr)
      .groupBy( event => event['year'] )
      .mergeMap(group => group.toArray()).map(arr => arr.sort().reverse())
      .toArray()
      .map(arr => arr.reverse())
    )
    .do(console.log)
  }

}
