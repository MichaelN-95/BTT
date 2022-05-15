import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  eventItem: {
    name: string;
    date: string;
    location: string;
    description: string;
    organizer: string;
    email: string;
    price: number;
    image: string;
    capacity: number;
  };
  constructor(private http: HttpClient) {}

  clearForm(form: NgForm) {
    form.reset();
  }

  onSubmit(form: NgForm) {
    this.eventItem = {
      name: form.value.title,
      date: form.value.date,
      location: form.value.location,
      description: form.value.description,
      organizer: form.value.organizer,
      email: form.value.email,
      price: form.value.price,
      image: form.value.image,
      capacity: form.value.capacity,
    };
    this.http
      .post('http://localhost:5000/api/events', this.eventItem)
      .subscribe((res) => {
        console.log(res);
      });
    this.clearForm(form);
  }
  ngOnInit(): void {}
}
