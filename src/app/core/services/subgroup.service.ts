import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {RoomDto} from "../models/room.model";
import {SubgroupCreateDto, SubgroupDto} from "../models/subgroups.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubgroupService extends BaseService{
  apiUrl = `${environment.apiUrl}/subgroup`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  postSubgroup(subgroupCreateDto: SubgroupCreateDto): Observable<SubgroupDto>{
    return this.httpClient.post<SubgroupDto>(this.apiUrl, subgroupCreateDto, this.httpOptions);
  }

  getSubgroups(roomId: string | undefined): Observable<SubgroupDto[]>{
    console.log(this.apiUrl + "/" + roomId);
    return this.httpClient.get<SubgroupDto[]>(this.apiUrl + "/" + roomId, this.httpOptions);
  }

}
