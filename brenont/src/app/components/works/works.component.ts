import { Component, OnInit } from '@angular/core';
import { DATA } from "../../../theme/db.js";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public data = DATA.sections.works;

  constructor() { }

  ngOnInit() {
  }

}
