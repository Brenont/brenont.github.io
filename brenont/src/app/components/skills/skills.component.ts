import { Component, OnInit } from "@angular/core";
import { DATE } from "../../../theme/db.js"

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  public date = DATE.sections.skills;
  public skills: Array<any>;

  constructor() {
    this.skills = this.date.skillsArr;
  }

  ngOnInit() {}
}
