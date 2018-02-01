import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PublicationsService {

  constructor(private db:AngularFireDatabase) { }

  findArgPublications(arg): Observable<any[]> {
    switch(arg) {
      case 'whole':
        break;
      case 'international':
        return this.db.list('publications', ref => ref.orderByChild('type').equalTo('international').limitToLast(3))
          .valueChanges()
          .first()
          .map(array => array.reverse())
          // .do(console.log);
      case 'domestic':
        break;
      case 'thesis':
        break;
    }
    
  }
}
