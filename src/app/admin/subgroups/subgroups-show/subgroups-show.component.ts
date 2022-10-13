import { Component, OnInit } from '@angular/core';
import {SubgroupService} from "../../../core/services/subgroup.service";
import {first} from "rxjs";
import {SubgroupDto} from "../../../core/models/subgroups.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {ChildDto} from "../../../core/models/child.model";

@Component({
  selector: 'app-subgroups-show',
  templateUrl: './subgroups-show.component.html',
  styleUrls: ['./subgroups-show.component.scss']
})
export class SubgroupsShowComponent implements OnInit {

  subgroupDto: SubgroupDto | undefined;
  dataSource: ChildDto[] = [];
  subgroupId: string;
  displayedColumns = ['name', 'birthDate', 'registrationNumber', 'registrationDate'];

  constructor(
    private subgroupService: SubgroupService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.subgroupId = this.route.snapshot.paramMap.get('subgroupId')!;
  }

  ngOnInit(): void {
    this.loaderService.show()
    this.getSubgroup(this.subgroupId);
  }

  private getSubgroup(subgroupId: string) {
    this.subgroupService.getSubgroupById(subgroupId)
      .pipe(first())
      .subscribe({
        next: subgroupDto => {
          this.subgroupDto = subgroupDto;
          this.dataSource = subgroupDto.children;
          this.loaderService.hide();
        }
      }
    )
  }

  addNewChild() {
    this.router.navigate(['admin','children', 'new', this.subgroupId])
  }

  openChild(childDto: ChildDto) {
    this.router.navigate(['admin','children', childDto.id]);
  }

  backLink() {
      this.router.navigate(['admin','rooms']);
  }
}
