import { EventsService } from './../../services/events.service';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastComponent } from 'frontend/app/common/toast/toast.component';
import { TestService } from 'frontend/app/services/test.service';
import { Event } from '../../common/models/event.model';
import { Test } from '../../common/models/test.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  event = new Event();
  events: Event[] = [];

  test = new Test();
  tests: Test[] = [];

  constructor(
    private testService: TestService,
    public toast: ToastComponent,
    private router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents(): void {
    this.eventsService.getEvents().subscribe((data) => {
      this.events = data;

      console.log(this.events);
    });
  }
}
