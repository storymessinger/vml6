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
    return this.db.list('seminars', ref => ref.orderByChild('date'))
    .valueChanges()
    .map(arr => arr.reverse())
    .first()
  }

}
