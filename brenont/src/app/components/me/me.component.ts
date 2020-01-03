import { Component, OnInit } from '@angular/core';
import { DATA } from "../../../theme/db.js"

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  public data = DATA.sections.aboutMe;

  public cardHover = false;

  constructor() { }

  ngOnInit() {
  }

  toggleText() {
    this.cardHover = !this.cardHover;
  }

}
