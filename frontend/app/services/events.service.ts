import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events = [
    {
      id: 1,
      title: 'Haze',
      date: '2020-05-20',
      time: '10:00',
      location: 'Byrnes Bar Edenderry',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      organizer: 'Byrnes Bar',
      price: 0,
      image: '../../../assets/haze.webp',
      capacity: 100,
    },
    {
      id: 2,
      title: 'Emerald',
      date: '2020-12-20',
      time: '18:00',
      location: 'Damodar Bar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      organizer: 'Byrnes Bar',
      price: 20,
      image: '../../../assets/haze.webp',
      capacity: 100,
    },
    {
      id: 3,
      title: 'Club House',
      date: '2021-10-20',
      time: '10:00',
      location: 'Club38',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      organizer: 'Byrnes Bar',
      price: 5,
      image: '../../../assets/haze.webp',
      capacity: 100,
    },
    {
      id: 4,
      title: 'Haze',
      date: '2020-05-20',
      time: '10:00',
      location: 'Byrnes Bar Edenderry',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      organizer: 'Byrnes Bar',
      price: 0,
      image: '../../../assets/haze.webp',
      capacity: 100,
    },
    {
      id: 5,
      title: 'Haze',
      date: '2020-05-20',
      time: '10:00',
      location: 'Byrnes Bar Edenderry',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      organizer: 'Byrnes Bar',
      price: 10,
      image: '../../../assets/haze.webp',
      capacity: 100,
    },
  ];
  constructor() {}

  getEvents() {
    return this.events;
  }

  getEvent(id: number) {
    return this.events.find((event) => event.id === id);
  }

  addEvent(event: any) {
    this.events.push(event);
  }

  updateEvent(event: any) {
    const index = this.events.findIndex((e) => e.id === event.id);
    this.events[index] = event;
  }

  deleteEvent(id: number) {
    this.events = this.events.filter((event) => event.id !== id);
  }
}
