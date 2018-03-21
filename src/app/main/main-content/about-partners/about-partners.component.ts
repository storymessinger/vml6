import { PartnersSponsershipService } from './../../../services/partners-sponsership.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss']
})
export class AboutPartnersComponent implements OnInit {

  public imgPath = "./../../../../assets/Contents/";

  partners_government$ : Observable<any[]>;
  partners_institutions$: Observable<any[]>;
  partners_academies$: Observable<any[]>;
  partners_productions$: Observable<any[]>;
 

  constructor(
    private partnersSponsershipService:PartnersSponsershipService
  ) { 
  }

  ngOnInit() {
    this.partners_government$ = this.partnersSponsershipService.findPartner('Government');
    this.partners_institutions$ = this.partnersSponsershipService.findPartner('Corporation');
    this.partners_academies$ = this.partnersSponsershipService.findPartner('Academy');
    this.partners_productions$ = this.partnersSponsershipService.findPartner('Production');
  }
}
