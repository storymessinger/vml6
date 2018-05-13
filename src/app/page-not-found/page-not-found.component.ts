import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
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
    private db:AngularFireDatabase,
    private router:Router
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


    this.found = val.find( item => {
      return item.old == this.snapshot.join('/') 
    }) 

    if ( this.snapshot[0] == ":3000") {
      // nothing
    } else {
      if ( this.found.type == "Intra") {
        let relocate = "http://vml.kaist.ac.kr" + this.found.new;
        window.location.href = relocate;
        //Intra
      } else if(this.snapshot[0].path == 'home' || this.snapshot[0].path == 'main') {
        this.router.navigateByUrl('error');
        //nothing
        //show this not-found-page
      } else if (this.found == undefined) {
        window.location.href="http://vml.kaist.ac.kr:3000/" + this.snapshot.join('/');
        //relocate to old homepage, with original address
      } else {
        window.location.href= this.found.new;
        //relocate to new homepage, with different address
      }
    }
  }


}

