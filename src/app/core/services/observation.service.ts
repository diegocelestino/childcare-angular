import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ObservationCreateDto, ObservationDto} from "../models/observation.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservationService extends BaseService{
  apiUrl = `${environment.apiUrl}/observation`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  postObservation(observationCreateDto: ObservationCreateDto): Observable<ObservationDto> {
    return this.httpClient.post<ObservationDto>(this.apiUrl, observationCreateDto, this.httpOptions);
  }

  getObservationsByChildId(childId: string): Observable<ObservationDto[]> {
    return this.httpClient.get<ObservationDto[]>(this.apiUrl + "/" + childId, this.httpOptions);
  }
}
