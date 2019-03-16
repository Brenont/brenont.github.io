import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  public skills: Array<any>;

  constructor() {
    this.skills = [
      {
        name: "HTML",
        value: "75%"
      },
      {
        name: "CSS",
        value: "70%"
      },
      {
        name: "Javascript",
        value: "65%"
      },
      {
        name: "Angular",
        value: "55%"
      },
      {
        name: "Ionic",
        value: "55%"
      },
      {
        name: "Sass",
        value: "60%"
      },
      {
        name: "Jquery",
        value: "45%"
      },
    ];
  }

  ngOnInit() {}
}
