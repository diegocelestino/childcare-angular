import { Component, OnInit } from '@angular/core';

import {ObservationDto} from "../../../core/models/observation.model";

import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../core/services/loader.service";
import {first} from "rxjs";
import {ObservationService} from "../../../core/services/observation.service";

@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.scss']
})
export class ObservationsListComponent implements OnInit {
  observationsDto: ObservationDto[] =[]
  childId: string;
  displayedColumns: string[] = ['observationType', 'description'];


  constructor(
    private observationService: ObservationService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
  ) {
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
    this.getObservationsByChildId(this.childId);
  }

  private getObservationsByChildId(childId: string) {
    this.observationService.getObservationsByChildId(childId)
      .pipe(first())
      .subscribe({
          next: observations => {
            this.observationsDto = observations;
          }
        }
      )
  }

  backLink() {

  }

  newObservation(childId: string) {
    this.router.navigate(['admin', 'observations', childId]);
  }
}
