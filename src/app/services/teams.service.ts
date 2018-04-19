import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/first';

@Injectable()
export class TeamsService {

  constructor(private db:AngularFireDatabase) { }

  findAllTeams(): Observable<any[]> {
    return this.db.list('teams', ref => ref.orderByChild('type').equalTo('research'))
    .valueChanges()
    .first()
    
  }

  findTeamById(id):Observable<any[]> {
    return this.db.list('teams', ref => ref.orderByChild('id').equalTo(id))
    .valueChanges()
    .first()
  }

}
