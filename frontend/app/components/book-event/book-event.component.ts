import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
// import { Stripe } from 'stripe';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const Stripe: any;
interface Session {
  session?: { id: string };
}
@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.scss'],
})
export class BookEventComponent implements OnInit {
  isGettingCheckout: boolean;
  isLoading = true;
  bookingAmount: number;
  session: any;
  stripe: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async book() {
    this.http
      .post<Session>(
        'http://localhost:4200/api/event/628bfe89d423352acd4faecf/book',
        {}
      )
      .subscribe((data: any) => {
        this.redirectToCheckout(data.session.id);
      });
  }

  async redirectToCheckout(sessionId: string) {
    this.stripe = await loadStripe(
      'pk_test_51L2OwuHJaXw5vKnTXoW9RZs4FaXQSoaPC862QVrxQtVIHgTXLmZYG0JCWpPrnq6ecY8xe4tw0qwDEKu9ZRJ44EkV00JJiWyR7A'
    );
    console.log();
    this.stripe.redirectToCheckout({
      sessionId,
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
}
