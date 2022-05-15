import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  events: any;
  constructor(private http: HttpClient) {}

  createEvent(
    name: string,
    date: string,
    time: string,
    email: string,
    location: string,
    description: string,
    image: string,
    organizer: string,
    price: number,
    capacity: number
  ) {
    this.http
      .post('http://localhost:5000/api/events', {
        name: name,
        date: date,
        time: time,
        email: email,
        location: location,
        description: description,
        image: image,
        organizer: organizer,
        price: price,
        capacity: capacity,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/events').subscribe((data) => {
      console.log(data);
    });

    console.log(this.events + 'events');
  }
}
