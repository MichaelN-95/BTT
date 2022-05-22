import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const eventsModule = () =>
  import('./components/events/events.module').then((m) => m.EventsModule);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'event/:id',
  //   component: EventComponent,
  // },
  {
    path: 'create-event',
    component: CreateEventComponent,
  },
  {
    path: 'test',
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
    path: '404',
    component: PageNotFoundComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '/404', // 404
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
