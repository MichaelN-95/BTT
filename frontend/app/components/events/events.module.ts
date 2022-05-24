import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { EventsRoutingModule } from './events-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SharedModule } from 'frontend/app/shared/shared.module';
import { AddEditListComponent } from './add-edit-list/add-edit-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsRoutingModule,
    SharedModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent,
    EventDetailComponent,
    AddEditListComponent,
  ],
  exports: [
    LayoutComponent,
    ListComponent,
    AddEditComponent,
    EventDetailComponent,
  ],
})
export class EventsModule {}
