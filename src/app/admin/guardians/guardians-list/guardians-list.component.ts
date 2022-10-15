import {Component, OnInit} from '@angular/core';
import {GuardianDto} from "../../../core/models/guardian.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {GuardianService} from "../../../core/services/guardian.service";
import {first} from "rxjs";

@Component({
  selector: 'app-guardians-list',
  templateUrl: './guardians-list.component.html',
  styleUrls: ['./guardians-list.component.scss']
})
export class GuardiansListComponent implements OnInit {
  guardiansDto: GuardianDto[] =[]
  childId: string;
  displayedColumns: string[] = ['name', 'cpf', 'actions'];

  constructor(
    private guardianService: GuardianService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    this.childId = this.route.snapshot.paramMap.get('childId')!;
  }

  ngOnInit(): void {
    this.getGuardiansByChildId(this.childId);
  }

  private getGuardiansByChildId(childId: string) {
    this.guardianService.getGuardiansByChildId(childId)
      .pipe(first())
      .subscribe({
          next: guardians => {
            this.guardiansDto = guardians;
          }
        }
      )
  }

  newGuardian(childId: string) {
    this.router.navigate(['admin', 'guardians', childId]);
  }

  deleteGuardian(guardianId: string) {
    this.guardianService.deleteGuardian(guardianId)
      .pipe(first())
      .subscribe({
          next: ()=> {
            this.notificationService.success("Responsável excluído com sucesso");
            this.getGuardiansByChildId(this.childId);
          },
        }
      )
  }
}
