import {Component, OnInit} from '@angular/core';

import {ObservationDto} from "../../../core/models/observation.model";

import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import {ObservationService} from "../../../core/services/observation.service";
import {NotificationService} from "../../../core/services/notification.service";

@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.scss']
})
export class ObservationsListComponent implements OnInit {
  observationsDto: ObservationDto[] =[]
  childId: string;
  displayedColumns: string[] = ['observationType', 'description', 'delete', 'edit'];


  constructor(
    private observationService: ObservationService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
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

  deleteObservation(observationId: string) {
    this.observationService.deleteObservation(observationId)
      .pipe(first())
      .subscribe({
        next: ()=> {
          this.notificationService.success("Observação excluída com sucesso");
          this.getObservationsByChildId(this.childId);
        },
        }
      )
  }

  editObservation(observationId: string) {
    this.router.navigate(['admin', 'observations', 'update', observationId]);
  }

  newObservation(childId: string) {
    this.router.navigate(['admin', 'observations', childId]);
  }
}
