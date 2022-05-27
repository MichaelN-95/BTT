import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss'],
})
export class FailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backHome() {
    this.router.navigate(['/']);
  }
}
