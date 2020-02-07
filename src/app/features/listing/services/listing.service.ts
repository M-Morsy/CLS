import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListingRequest } from '../models/listing-request.model';
import { ListingResponse } from '../models/listing-response.model';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  constructor(
    private http: HttpClient
  ) { }

  getAllNotes() {
    return this.http.get<ListingResponse>(environment.apiUrl + 'notes');
  }

  getNote(noteId) {
    return this.http.get<ListingRequest>(environment.apiUrl + 'notes/' + noteId);
  }

  deleteNote(noteId: number) {
    return this.http.delete(`${environment.apiUrl}notes/${noteId}`)
  }

  addNote(body: ListingRequest) {
    return this.http.post(environment.apiUrl + 'notes', body);
  }

  editNote(body: ListingRequest) {
    return this.http.put(environment.apiUrl + `notes/${body.id}`, body);
  }

}
