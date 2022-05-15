import { EventsService } from '../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  public events: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    price: any;
    image: string;
    capacity: number;
  }[] = [];
  constructor(private eventService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  eventDetail(eventId: number) {
    this.router.navigate(['/event', eventId]);
  }
}
