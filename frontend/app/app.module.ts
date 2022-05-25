import { ToastComponent } from './shared/toast/toast.component';
import { EventsModule } from './components/events/events.module';
//Modules
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TestComponent } from './components/test/test.component';

// Services
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthService } from './services/auth.service';
import { EventsService } from './services/events.service';
import { UserService } from './services/user.service';
import { BookEventComponent } from './components/book-event/book-event.component';
import { SuccessComponent } from './components/book-event/success/success.component';
import { FailComponent } from './components/book-event/fail/fail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TestComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    AuthComponent,
    RegisterComponent,
    BookEventComponent,
    SuccessComponent,
    FailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    EventsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string | null => localStorage.getItem('token'),
        allowedDomains: ['localhost:3000', 'localhost:4200'],
      },
    }),
    NgbModule,
  ],
  providers: [
    EventsService,
    UserService,
    AuthGuardAdmin,
    AuthGuardLogin,
    AuthService,
    ToastComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
