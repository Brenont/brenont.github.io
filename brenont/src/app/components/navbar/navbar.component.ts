import { Component, OnInit } from '@angular/core';
import { PAGES } from "../../../theme/db.js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public sections = PAGES;

  constructor() { }

  ngOnInit() {
  }

}
