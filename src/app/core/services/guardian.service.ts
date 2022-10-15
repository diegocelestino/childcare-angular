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

  constructor(private httpClient: HttpClient) {
    super();
  }

  postGuardian(guardianCreateDto: GuardianCreateDto): Observable<GuardianDto> {
    return this.httpClient.post<GuardianDto>(this.apiUrl + "/" + guardianCreateDto, this.httpOptions);
  }
}
