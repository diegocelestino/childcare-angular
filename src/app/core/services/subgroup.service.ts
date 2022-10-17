import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubgroupCreateDto, SubgroupDto} from "../models/subgroups.model";
import {environment} from "../../../environments/environment";
import {RegisterTeacherCreateDto} from "../models/teacher.model";

@Injectable({
  providedIn: 'root'
})
export class SubgroupService extends BaseService{
  apiUrl = `${environment.apiUrl}/subgroup`;
  byRoom = '?roomId='
  registerTeacher = '/registerTeacher'
  unregisterTeacher = '/unregisterTeacher'

  constructor(private httpClient: HttpClient) {
    super();
  }

  postSubgroup(subgroupCreateDto: SubgroupCreateDto): Observable<SubgroupDto>{
    return this.httpClient.post<SubgroupDto>(this.apiUrl, subgroupCreateDto, this.httpOptions);
  }

  getSubgroupById(subgroupId: string): Observable<SubgroupDto> {
    return this.httpClient.get<SubgroupDto>(this.apiUrl + "/" + subgroupId, this.httpOptions);
  }

  getSubgroupsByRoomById(roomId: string): Observable<SubgroupDto[]> {
    return this.httpClient.get<SubgroupDto[]>(this.apiUrl + this.byRoom + roomId, this.httpOptions);
  }

  postRegisterTeacherOnSubgroup(registerTeacherCreateDto: RegisterTeacherCreateDto): Observable<SubgroupDto> {
    return this.httpClient.post<SubgroupDto>(this.apiUrl + this.registerTeacher, registerTeacherCreateDto, this.httpOptions);
  }

  postUnregisterTeacherOnSubgroup(unregisterTeacherDto: RegisterTeacherCreateDto): Observable<SubgroupDto> {
    return this.httpClient.post<SubgroupDto>(this.apiUrl + this.unregisterTeacher, unregisterTeacherDto, this.httpOptions);

  }
}
