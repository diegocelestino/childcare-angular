import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoomCreateDto, RoomDto} from "../models/room.model";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BaseService{
  apiUrl = `${environment.apiUrl}/room`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  postRoom(roomCreateDto: RoomCreateDto): Observable<RoomDto> {
    return this.httpClient.post<RoomDto>(this.apiUrl, roomCreateDto, this.httpOptions);
  }

  getRooms(): Observable<RoomDto[]>{
    return this.httpClient.get<RoomDto[]>(this.apiUrl, this.httpOptions)
      .pipe(
        map(results => results.sort((a, b) => a.name.localeCompare(b.name)))
      );
  }

  getRoomById(roomId: string): Observable<RoomDto> {
    return this.httpClient.get<RoomDto>(this.apiUrl + "/" + roomId, this.httpOptions);
  }
}
