import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastComponent } from 'frontend/app/common/toast/toast.component';
import { TestService } from 'frontend/app/services/test.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  date = new FormControl('', [Validators.required]);

  location = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  description = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  price = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  organizer = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  capacity = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(2),
  ]);

  image = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*'),
  ]);

  constructor(
    private testService: TestService,
    public toast: ToastComponent,
    private router: Router
  ) {
    this.eventForm = new FormGroup({
      name: this.name,
      date: this.date,
      location: this.location,
      description: this.description,
      organizer: this.organizer,
      email: this.email,
      price: this.price,
      image: this.image,
      capacity: this.capacity,
    });
  }
  clearForm(form: FormGroup) {
    form.reset();
  }

  setClassEventName() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventDate() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventLocation() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventDescription() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventOrganizer() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventEmail() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventPrice() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventImage() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  setClassEventCapacity() {
    return {
      'has-danger': !this.eventForm.pristine && !this.eventForm.valid,
    };
  }

  addEvent() {
    this.testService.addEvent(this.eventForm.value).subscribe({
      next: (res) => {
        this.toast.setMessage('You successfully registered!', 'success');
        this.router.navigate(['/home']);
      },
      error: (error) => this.toast.setMessage('Form not valid', 'danger'),
    });
  }
  ngOnInit(): void {}
}
