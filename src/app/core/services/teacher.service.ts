import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {TeacherDto} from "../models/teacher.model";

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseService {
  apiUrl = `${environment.apiUrl}/teacher`;
  bySubgroup = '?subgroupId='

  constructor(private httpClient: HttpClient) {
    super();
  }

  getTeachers(): Observable<TeacherDto[]> {
    return this.httpClient.get<TeacherDto[]>(this.apiUrl, this.httpOptions);
  }

  deleteTeacher(teacherId: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(this.apiUrl + "/" + teacherId, this.httpOptions);
  }
}
