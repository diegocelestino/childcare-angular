import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../core/services/notification.service";
import {SubgroupService} from "../../../core/services/subgroup.service";
import {Cycle, Period, SubgroupCreateDto} from "../../../core/models/subgroups.model";
import {RoomListDto} from "../../../core/models/room.model";

@Component({
  selector: 'app-subgroup-form',
  templateUrl: './subgroup-form.component.html',
  styleUrls: ['./subgroup-form.component.scss']
})
export class SubgroupFormComponent implements OnInit {
  form: FormGroup;
  periodClass = Period;
  cycleClass = Cycle;
  periodKeys: any = [];
  cycleKeys: any = [];
  submitted: boolean = false;
  roomId: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private subgroupService: SubgroupService,
    private notificationServise: NotificationService,
  ) {
    this.periodKeys = Object.keys(this.periodClass);
    this.cycleKeys = Object.keys(this.cycleClass);
    this.form = this.buildForm();
    this.roomId = this.route.snapshot.paramMap.get('roomId')!;
  }

  ngOnInit(): void {
    console.log(this.roomId);
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createSubgroup();
  }

  private createSubgroup() {

    const subgroupCreateDto = new SubgroupCreateDto(
      this.form.value['cycle'],
      this.form.value['period'],
      this.form.value['capacity'],
      this.roomId,
    );

    this.subgroupService.postSubgroup(subgroupCreateDto).pipe()
      .subscribe({
        next: roomDto => {
          this.notificationServise.success("Sala cadastrada com sucesso");
          return this.router.navigate(['admin','rooms',this.roomId]);
        },
        error: error =>
          console.log(error)
      });

  }

  private buildForm() {
    return this.formBuilder.group({
      cycle: [''],
      period: [''],
      capacity: [''],
    });
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path)?.errors;
  }

  backLink() {
    this.router.navigate(['admin', 'rooms', this.roomId]);
  }

}
