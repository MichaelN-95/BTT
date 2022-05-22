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
  eventItem: any;
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // this.getEvent(+params.get('id'));
      this.getEvent(+params.get('id'));

      // this.getEvent(id);
    });
  }

  getEvent(id: number) {
    this.eventsService.getEvent(id).subscribe((data) => {
      this.eventItem = data;

      console.log(this.eventItem);
    });
  }
  return() {
    this._location.back();
  }
}
