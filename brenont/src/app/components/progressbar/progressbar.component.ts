import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() name: string;
  @Input() value: string;
  @Input() color: string;

  public progressOver = false;

  constructor() { }

  ngOnInit() {
  }

}
