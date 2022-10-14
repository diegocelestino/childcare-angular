import { Component, OnInit } from '@angular/core';
import {ChildDto} from "../../../core/models/child.model";
import {SubgroupService} from "../../../core/services/subgroup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {ChildService} from "../../../core/services/child.service";
import {first} from "rxjs";

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss']
})
export class ChildrenListComponent implements OnInit {
  childrenDto: ChildDto[] = []
  subgroupId: string;
  displayedColumns = ['name', 'birthDate', 'registrationNumber', 'registrationDate'];

  constructor(
    private childService: ChildService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.subgroupId = this.route.snapshot.paramMap.get('subgroupId')!;
  }

  ngOnInit(): void {
    this.getChildren(this.subgroupId);
  }

  private getChildren(subgroupId: string) {
    this.childService.getChildrenById(subgroupId)
      .pipe(first())
      .subscribe({
          next: childrenDto => {
            this.childrenDto = childrenDto;
            this.loaderService.hide();
          }
        }
      )
  }

  openChild(childDto: ChildDto) {
    this.router.navigate(['admin','children', childDto.id]);
  }

}
