import { Component, OnInit } from '@angular/core';
import { ChildDto } from "../../../core/models/child.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {first} from "rxjs";
import {ChildService} from "../../../core/services/child.service";

@Component({
  selector: 'app-children-show',
  templateUrl: './children-show.component.html',
  styleUrls: ['./children-show.component.scss']
})
export class ChildrenShowComponent implements OnInit {
  childDto: ChildDto | undefined;
  childId: string;

  constructor(
    private childService: ChildService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
    this.getChild(this.childId);
  }

  private getChild(childId: string) {
    this.childService.getChildById(childId)
      .pipe(first())
      .subscribe({
        next: childDto => {
          this.childDto = childDto;
          this.loaderService.hide();
        }
      })
  }

  updateChild(childId: string) {
    this.router.navigate(['admin', 'children', 'edit', childId]);
  }

  backLink() {
    this.router.navigate(['admin','subgroups', this.childDto!.subgroup.id]);
  }
}
