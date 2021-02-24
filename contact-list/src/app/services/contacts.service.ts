import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Contact[]>(this.baseUrl + 'contacts');
  }
}
