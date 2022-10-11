import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openRoomsForm(){
    return this.router.navigate(['admin', 'rooms', 'new']);
  }
  openRoomsList(){
    return this.router.navigate(['admin', 'rooms']);
  }

  openSubgroupsForm() {
    return this.router.navigate(['admin', 'subgroups', 'new']);
  }
}
