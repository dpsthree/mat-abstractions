import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mab-feature-layout',
  templateUrl: './feature-layout.component.html',
  styleUrls: ['./feature-layout.component.scss']
})
export class FeatureLayoutComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
