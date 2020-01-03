import { Component, OnInit } from "@angular/core";
import { DATA } from "../../../theme/db.js"

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  public data = DATA.sections.skills;
  public skills: Array<any>;

  constructor() {
    this.skills = this.data.skillsArr;
  }

  ngOnInit() {}
}
