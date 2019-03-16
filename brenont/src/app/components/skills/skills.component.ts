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
      color: "#0da394"
    },
    {
      name: "Html",
      value: "75%",
      color: "#0da394"
    },
    {
      name: "Angular",
      value: "50%",
      color: "#0da394"
    },
    {
      name: "Ionic",
      value: "35%",
      color: "#0da394"
    },
    {
      name: "Css",
      value: "60%",
      color: "#0da394"
    },
    {
      name: "Jquery",
      value: "45%",
      color: "#0da394"
    },
    {
      name: "Sass",
      value: "50%",
      color: "#0da394"
    },
  ]
   }

  ngOnInit() {
  }

}
