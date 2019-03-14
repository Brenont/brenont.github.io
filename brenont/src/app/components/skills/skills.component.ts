import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills : Array<any>;

  constructor() {
    this.skills = [{
      name: "HTML",
      value: "65%",
      color: "orange"
    },{
      name: "HTML",
      value: "25%",
      color: "orange"
    },{
      name: "HTML",
      value: "45%",
      color: "orange"
    }
  ]
   }

  ngOnInit() {
  }

}
