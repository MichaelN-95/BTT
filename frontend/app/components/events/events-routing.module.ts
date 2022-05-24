import { AddEditListComponent } from './add-edit-list/add-edit-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';

import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'event-list', component: AddEditListComponent },
      { path: 'add', component: AddEditComponent },
      { path: 'event-list/edit/:id', component: AddEditComponent },
      { path: 'event/:id', component: EventDetailComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
