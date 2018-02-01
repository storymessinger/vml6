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

  constructor(
    // private mockDataService:MockDataService,
    private activatedRoute:ActivatedRoute,
    private membersService:MembersService
    // private individualHttpService:IndividualHttpService
  ) { 

  }

  ngOnInit() {
    
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        // this.id = parseInt(param['id']);
        let ID :number = parseInt(param['id']);
        this.person$ = this.membersService.findMemberById(ID)
      })
    // this.mockDataService.getMembers(this.id);
    // this.datas = this.mockDataService.people_person;
    // this.individual$ = this.individualHttpService.findById(this.id);
  }

}
