import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [LoadingComponent, ToastComponent],
  exports: [LoadingComponent, ToastComponent],
  imports: [CommonModule],
  providers: [ToastComponent],
})
export class SharedModule {}
