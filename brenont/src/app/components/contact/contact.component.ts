import { Component, OnInit } from '@angular/core';
import { DATA } from "../../../theme/db.js"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public data = DATA.sections.contact;

  constructor() { }

  ngOnInit() {
  }

}
