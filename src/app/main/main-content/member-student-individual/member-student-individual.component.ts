import { Router } from '@angular/router';
// import { IndividualHttpService } from '../../../shared/individual-http.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../../services/members.service';
// import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-member-student-individual',
  templateUrl: './member-student-individual.component.html',
  styleUrls: ['./member-student-individual.component.scss'],
})
export class MemberStudentIndividualComponent implements OnInit {

  subscription: Subscription;
  id: number;
  imgPath:string = './assets/Contents/';

  person$: Observable<any>;
  individual$: Observable<any>;

  order = "year";
  ascending = false;

  constructor(
    // private mockDataService:MockDataService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private membersService:MembersService
    // private individualHttpService:IndividualHttpService
  ) { 

  }

  ngOnInit() {
    
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        let ID :number = parseInt(param['id']);
        this.person$ = this.membersService.findMemberById(ID)
      })
  }

  navigateTo(url, id) {
    if (id == "external") {
      window.location.href = url;
    } else {
      let dest = url + '/' + id
      this.router.navigateByUrl(dest);
    }
  }

  navi(url, id, type) {
    if (type == "international") {
      if (id == "external") {
        window.location.href = url;
      } else {
        let dest = url + '/' + id
        this.router.navigateByUrl(dest);
      }
    } else if (type == "domestic") {
      this.router.navigateByUrl("main/domestic")
    } else if (type =="thesis"){
      this.router.navigateByUrl("main/thesis")
    }


  }

}
