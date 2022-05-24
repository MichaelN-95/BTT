import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Event } from '../common/models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  paymentHandler: any = null;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/events');
  }

  getEvent(_id: string) {
    return this.http.get<any>(`/api/event/${_id}`);
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

  deleteEvent(id: string) {
    return this.http.delete<any>(`/api/event/${id}`);
  }

  bookEvent(id: string) {
    return this.http.post<any>(`/api/event/${id}/book`, {});
  }

  populate() {
    this.http.get<any>('/api/events/populate').subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
