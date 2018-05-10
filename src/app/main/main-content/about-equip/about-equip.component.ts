import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-equip',
  templateUrl: './about-equip.component.html',
  styleUrls: ['./about-equip.component.scss']
})
export class AboutEquipComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  navigateTo(url) {
    this.router.navigateByUrl(url);
  }

}
