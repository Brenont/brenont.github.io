import { Component, OnInit } from '@angular/core';
import { DATE } from "../../../theme/db.js";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public date = DATE.sections.works;

  constructor() { }

  ngOnInit() {
  }

}
