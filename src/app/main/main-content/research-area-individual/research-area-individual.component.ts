import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-research-area-individual',
  templateUrl: './research-area-individual.component.html',
  styleUrls: ['./research-area-individual.component.scss']
})
export class ResearchAreaIndividualComponent implements OnInit {

  private subscription: Subscription;
  imgPath = "./assets/Contents/";
  id:any;
  team$: Observable<any[]>;

  order = "year";
  ascending = false;

  constructor(
    private router:Router,
    // private mockDataService:MockDataService,
    private activatedRoute:ActivatedRoute,
    private teamsService:TeamsService
    
    ) { 
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params //
      .subscribe( param => {
        // this.id = parseInt(param['id']);
        let ID :number = parseInt(param['id']);
        this.team$ = this.teamsService.findTeamById(ID)
      })
  }

  routing(id) {
    this.router.navigate(['/main/people/person', id])
  }
}
