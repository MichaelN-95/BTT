import { UserService } from './services/user.service';
import { EventsService } from './services/events.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event-list/event/event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { NavComponent } from './components/nav/nav.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastComponent } from './common/toast/toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavComponent,
    HeadlinesComponent,
    TestComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    SidebarComponent,
    AuthComponent,
    CreateEventComponent,
    RegisterComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string | null => localStorage.getItem('token'),
        allowedDomains: ['localhost:3000', 'localhost:4200'],
      },
    }),
    NgbModule,
  ],
  providers: [EventsService, ToastComponent, UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
