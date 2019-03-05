import { Component, OnInit } from '@angular/core';
import { UsercoService } from './../userco.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(public navservice: UsercoService) { }

  ngOnInit() {
  }

}
