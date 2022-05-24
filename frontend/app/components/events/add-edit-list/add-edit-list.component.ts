import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'frontend/app/services/events.service';
import { Event } from 'frontend/app/common/models/event.model';
import { first } from 'rxjs';
@Component({
  selector: 'app-add-edit-list',
  templateUrl: './add-edit-list.component.html',
  styleUrls: ['./add-edit-list.component.scss'],
})
export class AddEditListComponent implements OnInit {
  event = new Event();
  events: Event[] = [];
  eventImage = '../../../assets/haze.webp';
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }

  deleteEvent(id: string) {
    const event = this.events.find((e) => e._id === id);

    event.isDeleting = true;
    this.eventService
      .deleteEvent(event._id)
      .pipe(first())
      .subscribe(() => {
        this.events = this.events.filter((e) => e._id !== id);
      });
    // this.router.navigate(['/events']);
  }

  populate() {
    if (this.events.length > 0) {
      console.log('Already has events');
    } else {
      this.eventService.populate();
      this.ngOnInit();
    }
  }
}
