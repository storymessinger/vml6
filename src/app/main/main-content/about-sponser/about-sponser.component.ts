import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PartnersSponsershipService } from '../../../services/partners-sponsership.service';

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
    private router:Router,
    private partnersSponsorshipService:PartnersSponsershipService
  ) { }

  ngOnInit() {
    this.platinum$ = this.partnersSponsorshipService.findSponsor("platinum")
    this.gold$ = this.partnersSponsorshipService.findSponsor("gold")
    this.silver$ = this.partnersSponsorshipService.findSponsor("silver")
  }

  navigateTo(id, link, arg) {
    if (arg == 'people') {
      this.router.navigate(['/main/people/person', id]);

    } else if (arg == 'partners') {
      window.location.href = link;
    }
  }


}
