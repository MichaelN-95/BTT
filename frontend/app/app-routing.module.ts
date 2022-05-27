import { FailComponent } from './components/book-event/fail/fail.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { BookEventComponent } from './components/book-event/book-event.component';
import { SuccessComponent } from './components/book-event/success/success.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';

const eventsModule = () =>
  import('./components/events/events.module').then((m) => m.EventsModule);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'test',
    component: BookEventComponent,
  },
  {
    path: 'events',
    loadChildren: eventsModule,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'booking/success',
    component: SuccessComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'booking/fail',
    component: FailComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
