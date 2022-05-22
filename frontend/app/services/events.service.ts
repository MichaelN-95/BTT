import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../common/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/events');
  }

  getEvent(id: number) {
    return this.http.get<any>(`/api/event/${id}`);
  }

  addEvent(event: any) {
    this.http.post<any>('/api/event', event).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateEvent(event: any) {
    this.http.put<any>(`/api/event/${event.id}`, event).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteEvent(id: number) {
    this.http.delete<any>(`/api/event/${id}`).subscribe((data) => {
      console.log(data);
    });
  }
}
