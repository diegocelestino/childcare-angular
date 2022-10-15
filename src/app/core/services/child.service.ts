import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomDto} from "../models/room.model";
import {ChildCreateDto, ChildDto} from "../models/child.model";

@Injectable({
  providedIn: 'root'
})
export class ChildService extends BaseService{
  apiUrl = `${environment.apiUrl}/child`;
  bySubgroup = '?subgroupId='

  constructor(private httpClient: HttpClient) {
    super();
  }

  postChild(childCreateDto: ChildCreateDto): Observable<ChildDto> {
    return this.httpClient.post<ChildDto>(this.apiUrl, childCreateDto, this.httpOptions);
  }

  getChildById(childId: string): Observable<ChildDto> {
    return this.httpClient.get<ChildDto>(this.apiUrl + "/" + childId, this.httpOptions)
  }

  putAccount(childDto: ChildDto): Observable<ChildDto> {
    return  this.httpClient.put<ChildDto>(this.apiUrl, childDto, this.httpOptions);
  }

  getChildrenById(subgroupId: string): Observable<ChildDto[]> {
    return this.httpClient.get<ChildDto[]>(this.apiUrl + this.bySubgroup + subgroupId, this.httpOptions )
  }

  deleteChild(childId: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(this.apiUrl + "/" + childId, this.httpOptions);
  }
}
