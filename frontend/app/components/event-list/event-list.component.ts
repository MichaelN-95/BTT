import { EventsService } from '../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../common/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  event = new Event();
  events: Event[] = [];
  eventImage = '../../../assets/haze.webp';
  constructor(private eventService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;

      console.log(this.events);
    });
  }
  eventDetail(eventId: string) {
    console.log(eventId);

    this.router.navigate(['/event', eventId]);
  }
}
