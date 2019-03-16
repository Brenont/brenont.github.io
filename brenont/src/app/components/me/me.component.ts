import { Component, OnInit } from '@angular/core';
import { DATE } from "../../../theme/db.js"

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  public date = DATE.sections.aboutMe;

  public cardHover = false;

  constructor() { }

  ngOnInit() {
  }

}
