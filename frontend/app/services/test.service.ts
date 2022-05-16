import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../common/models/event.model';
import { User } from '../common/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/events');
  }

  getEvent(event: Event): Observable<Event> {
    return this.http.get<Event>(`/api/event/${event._id}`);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>('/api/event', event);
  }

  editEvent(event: Event): Observable<any> {
    return this.http.put(`/api/event/${event._id}`, event, {
      responseType: 'text',
    });
  }

  deleteEvent(event: Event): Observable<any> {
    return this.http.delete(`/api/event/${event._id}`, {
      responseType: 'text',
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/users/count');
  }
}
