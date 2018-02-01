import { PartnersSponsershipService } from './../../../services/partners-sponsership.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import * as _ from 'underscore';
// import { MockDataService } from './../../../shared/mockdata.service';

@Component({
  selector: 'app-about-partners',
  templateUrl: './about-partners.component.html',
  styleUrls: ['./about-partners.component.scss']
})
export class AboutPartnersComponent implements OnInit {

  private imgPath = "./../../../../assets/Contents/";

  partners_government$ : Observable<any[]>;
  partners_institutions$: Observable<any[]>;
  partners_academies$: Observable<any[]>;
  partners_productions$: Observable<any[]>;
 

  constructor(
    // private mockDataService:MockDataService
    private partnersSponsershipService:PartnersSponsershipService
  ) { 
  }

  ngOnInit() {
    this.partners_government$ = this.partnersSponsershipService.findPartner('Government');
    this.partners_institutions$ = this.partnersSponsershipService.findPartner('Institutions');
    this.partners_academies$ = this.partnersSponsershipService.findPartner('Academies');
    this.partners_productions$ = this.partnersSponsershipService.findPartner('Productions');
    // this.mockDataService.getPartners();
    // this.datas = this.mockDataService.partners;
  }
}
