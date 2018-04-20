import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
// import { MockDataService } from './shared/mockdata.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  private subscription:Subscription;
  snapshot:any;

  private redirect:any[] = [];
  private found:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private db:AngularFireDatabase
    // private mockDataService:MockDataService
  ) { 
    this.subscription = activatedRoute.params //
      .subscribe(
        (param:any) => {
          this.snapshot = activatedRoute.snapshot.url;
        })

    this.db.list('redirect')
      .valueChanges()
      .first()
      .subscribe( val => {
        this.redirectBetweenThree(val);
      })
  }

  ngOnInit() {

  }

  redirectBetweenThree(val) {
    this.redirect = val;

    this.found = this.redirect.find( item => {
      return item.old == this.snapshot.join('/') 
    }) 

    if(this.snapshot[0].path == 'home' || this.snapshot[0].path == 'main') {
      console.log('home or main');
      //nothing
      //show this not-found-page
    } else if (this.found == undefined) {
      console.log('not found');
      //relocate to old homepage, with original address
      // window.location.href="http://vml2.kaist.ac.kr/" + this.snapshot.join('/');
    } else if (this.found.old == "intra") {
      //relocate to intra
      window.location.href = "http://vml.kaist.ac.kr:3000/intra";
    } else {
      //relocate to new homepage, with different address
      window.location.href= this.found.new;
    }


  }


}

