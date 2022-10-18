import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactCreateDto, ContactDto} from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{
  apiUrl = `${environment.apiUrl}/contact`;
  byChild = '?childId='

  constructor(private httpClient: HttpClient) {
    super();
  }

  getContactsByChildId(childId: string): Observable<ContactDto[]> {
    return this.httpClient.get<ContactDto[]>(this.apiUrl + this.byChild + childId, this.httpOptions);
  }

  deleteContact(contactId: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(this.apiUrl + "/" + contactId, this.httpOptions);
  }

  postContact(contactCreateDto: ContactCreateDto): Observable<ContactDto> {
    return this.httpClient.post<ContactDto>(this.apiUrl, contactCreateDto, this.httpOptions);
  }

  getContact(contactId: string): Observable<ContactDto> {
    return this.httpClient.get<ContactDto>(this.apiUrl + "/" + contactId, this.httpOptions);
  }

  putContact(contactUpdateDto: ContactDto): Observable<ContactDto> {
    return this.httpClient.put<ContactDto>(this.apiUrl, contactUpdateDto, this.httpOptions);

  }
}
