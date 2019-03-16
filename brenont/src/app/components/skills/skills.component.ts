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
      name: "Javascript",
      value: "60%",
      color: "#F7DF1E"
    },{
      name: "Angular",
      value: "50%",
      color: "#DB3035"
    },
    {
      name: "Ionic",
      value: "35%",
      color: "#4887F7"
    },
    {
      name: "Html",
      value: "75%",
      color: "#E44D26"
    },
    {
      name: "Css",
      value: "60%",
      color: "orange"
    },
    {
      name: "Sass",
      value: "50%",
      color: "#C76494"
    },
    {
      name: "Jquery",
      value: "45%",
      color: "#1D74A7"
    },
  ]
   }

  ngOnInit() {
  }

}
