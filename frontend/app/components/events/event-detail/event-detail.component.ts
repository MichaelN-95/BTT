import { EventsService } from './../../../services/events.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Event } from '../../../common/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  id: string;
  event: Event;
  isLoading = true;
  url = this.getCurrentURL();

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.eventsService.getEvent(this.id).subscribe({
      next: (data) => (this.event = data),
      error: (err) => console.log(err),
      complete: () => (this.isLoading = false),
    });
  }

  getCurrentURL(): string {
    return window.location.href;
  }
}
