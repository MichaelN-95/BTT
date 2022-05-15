import { EventsService } from '../../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  eventItem: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    organizer: string;
    price: number;
    image: string;
    capacity: number;
  };
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.eventItem = this.eventsService.getEvent(id);
    });
  }

  return() {
    this._location.back();
  }
}
