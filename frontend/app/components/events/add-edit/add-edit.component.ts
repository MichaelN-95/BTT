import { EventsService } from './../../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'frontend/app/common/models/event.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  eventForm: FormGroup;
  id: string;
  isAddMode: boolean;
  eventImage = '../../../assets/haze.webp';
  submitted = false;
  constructor(
    private eventService: EventsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  get f() {
    return this.eventForm.controls;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;

    this.eventForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required]],
      location: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      organizer: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
    });
    if (!this.isAddMode) {
      this.eventService
        .getEvent(this.id)
        .pipe(first())
        .subscribe((x) => this.eventForm.patchValue(x));
    }
  }
  onSubmit() {
    this.submitted = true;
    this.createEvent();
    console.log(this.eventForm.value);
  }

  createEvent() {
    this.eventService.addEvent(this.eventForm.value);

    this.router.navigate(['/event-list'], { relativeTo: this.route });
  }

  clearForm(eventForm: FormGroup) {
    this.eventForm.reset(eventForm);
  }

  cancel() {
    this.router.navigate(['/event-list']);
  }
}
