import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
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
  rooms: RoomListDto[] = [];
  periodKeys: any = [];
  cycleKeys: any = [];
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private subgroupService: SubgroupService,
    private notificationServise: NotificationService,
  ) {
    this.periodKeys = Object.keys(this.periodClass);
    this.cycleKeys = Object.keys(this.cycleClass);
    this.form = this.buildForm();
    this.rooms = this.getRoomsFromLocalStorage();
  }

  ngOnInit(): void {
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
      this.form.value['roomId'],
    );

    this.subgroupService.postSubgroup(subgroupCreateDto).pipe()
      .subscribe({
        next: roomDto => {
          this.notificationServise.success("Sala cadastrada com sucesso");
          return this.router.navigate(['admin','rooms']);
        },
        error: error =>
          console.log(error)
      });

  }

  getRoomsFromLocalStorage(): RoomListDto[]{
    let rooms: RoomListDto[] = [];
    for (let item in localStorage){
      if (item.toString().startsWith("room")){
        rooms.push(new RoomListDto(
          localStorage.getItem(item)!.toString().split("ROOM")[0],
          parseInt(localStorage.getItem(item)!.toString().split("ROOM")[1]))
        );
      }
    }
    return rooms.sort((a, b) => a.number - b.number);
  }

  private buildForm() {
    return this.formBuilder.group({
      cycle: [''],
      period: [''],
      capacity: [''],
      roomId: [''],
    });
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path)?.errors;
  }

}
