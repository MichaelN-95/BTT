import { EventsService } from 'frontend/app/services/events.service';
import { User } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Event } from '../shared/models/event.model';

interface Session {
  session?: { id: string };
}
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  stripe: any;
  sessionID: string;
  event: Event;
  constructor(private http: HttpClient, private eventService: EventsService) {}

  async book(event: Event) {
    this.event = event;
    this.http
      .post<Session>(`api/event/${event._id}/book`, {
        name: this.event.name,
        description: this.event.description,
        price: this.event.price,
      })
      .subscribe((data: any) => {
        this.sessionID = data.session.id;
        this.redirectToCheckout();
      });
  }

  async redirectToCheckout() {
    this.stripe = await loadStripe(
      'pk_test_51L2OwuHJaXw5vKnTXoW9RZs4FaXQSoaPC862QVrxQtVIHgTXLmZYG0JCWpPrnq6ecY8xe4tw0qwDEKu9ZRJ44EkV00JJiWyR7A'
    );
    console.log();
    this.stripe.redirectToCheckout({
      sessionId: this.sessionID,
    });
  }
}
