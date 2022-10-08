import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  @Input()
  pageTitle: string = '';
  @Input()
  description: string = '';
  @Input()
  inlinePageTitle: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
