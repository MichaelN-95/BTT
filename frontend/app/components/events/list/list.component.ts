import { EventsService } from './../../../services/events.service';
import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../common/models/event.model';
@Component({
  selector: 'app-event-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() event = new Event();
  events: Event[] = [];
  eventImage = '../../../assets/haze.webp';
  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;

      console.log(this.events);
    });
  }

  log(event: Event) {
    console.log(event);
  }
}
