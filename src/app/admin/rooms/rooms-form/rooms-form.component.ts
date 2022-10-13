import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoomCreateDto} from "../../../core/models/room.model";
import {Router} from "@angular/router";
import {RoomService} from "../../../core/services/room.service";
import {NotificationService} from "../../../core/services/notification.service";

@Component({
  selector: 'app-rooms-form',
  templateUrl: './rooms-form.component.html',
  styleUrls: ['./rooms-form.component.scss']
})
export class RoomsFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomService,
    private notificationServise: NotificationService,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.createRoom();
  }

  private createRoom() {

    const roomCreateDto = new RoomCreateDto(
      this.form.value['number'],
      this.form.value['name'],
      this.form.value['sedName']
    );

    this.roomService.postRoom(roomCreateDto).pipe()
      .subscribe({
        next: roomDto => {
          this.notificationServise.success("Sala cadastrada com sucesso");
          return this.router.navigate(['admin','rooms']);
        },
        error: error =>
          console.log(error)
      });

  }

  private buildForm() {
    return this.formBuilder.group({
      number: [''],
      name: [''],
      sedName: [''],
    });
  }

  field(path: string) {
    return this.form.get(path)!;
  }

  fieldErrors(path: string) {
    return this.field(path)?.errors;
  }


}
