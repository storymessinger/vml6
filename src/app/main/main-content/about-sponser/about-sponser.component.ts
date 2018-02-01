import { Router } from '@angular/router';
// import { MockDataService } from './../../../shared/mockdata.service';
import { Component, OnInit } from '@angular/core';
import { PartnersSponsershipService } from '../../../services/partners-sponsership.service';
// import * as _ from 'underscore';

@Component({
  selector: 'app-about-sponser',
  
  templateUrl: './about-sponser.component.html',
  styleUrls: ['./about-sponser.component.scss']
})
export class AboutSponserComponent implements OnInit {

  platinum$;
  gold$;
  silver$;

  constructor(
    // private mockDataService:MockDataService, 
    private router:Router,
    private partnersSponsorshipService:PartnersSponsershipService
  ) { }

  ngOnInit() {
    // this.mockDataService.getSponser();
    // this.datas = this.mockDataService.sponser;

    this.platinum$ = this.partnersSponsorshipService.findSponsor("platinum")
    this.gold$ = this.partnersSponsorshipService.findSponsor("gold")
    this.silver$ = this.partnersSponsorshipService.findSponsor("silver")
  }

  navigateTo(link, arg) {
    if (arg == 'people') {
      this.router.navigate([link]);
    } else if (arg == 'partners') {
      window.location.href = link;
    }
  }


}
