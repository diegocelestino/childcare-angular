import { Injectable } from '@angular/core';
import {GuardianCreateDto, GuardianDto} from "../models/guardian.model";
import {BaseService} from "./base.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardianService extends BaseService{
  apiUrl = `${environment.apiUrl}/guardian`;
  byChild = '/by?childId='

  constructor(private httpClient: HttpClient) {
    super();
  }

  postGuardian(guardianCreateDto: GuardianCreateDto): Observable<GuardianDto> {
    return this.httpClient.post<GuardianDto>(this.apiUrl, guardianCreateDto, this.httpOptions);
  }

  getGuardiansByChildId(childId: string): Observable<GuardianDto[]> {
    return this.httpClient.get<GuardianDto[]>(this.apiUrl + this.byChild + childId, this.httpOptions);
  }

  deleteGuardian(guardianId: string): Observable<unknown> {
      return this.httpClient.delete<unknown>(this.apiUrl + "/" + guardianId, this.httpOptions);
  }

  getGuardian(guardianId: string): Observable<GuardianDto> {
    return this.httpClient.get<GuardianDto>(this.apiUrl + "/" + guardianId, this.httpOptions);
  }

  putObservation(guardianUpdateDto: GuardianDto): Observable<GuardianDto> {
    return this.httpClient.put<GuardianDto>(this.apiUrl, guardianUpdateDto, this.httpOptions);
  }
}
