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
  byChildId = '/by?childId=';
  update = '/update/'

  constructor(private httpClient: HttpClient) {
    super();
  }

  getObservation(observationId: string): Observable<ObservationDto> {
    return this.httpClient.get<ObservationDto>(this.apiUrl + "/" + observationId, this.httpOptions);
  }

  postObservation(observationCreateDto: ObservationCreateDto): Observable<ObservationDto> {
    return this.httpClient.post<ObservationDto>(this.apiUrl, observationCreateDto, this.httpOptions);
  }

  getObservationsByChildId(childId: string): Observable<ObservationDto[]> {
    return this.httpClient.get<ObservationDto[]>(this.apiUrl + this.byChildId + childId, this.httpOptions);
  }

  deleteObservation(observationId: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(this.apiUrl + "/" + observationId, this.httpOptions);
  }

  putObservation(observationDto: ObservationDto): Observable<ObservationDto> {
    return this.httpClient.put<ObservationDto>(this.apiUrl, observationDto, this.httpOptions);
  }
}
