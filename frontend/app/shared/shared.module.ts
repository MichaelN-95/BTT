import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [LoadingComponent, ToastComponent],
  exports: [LoadingComponent, ToastComponent],
  imports: [CommonModule],
})
export class SharedModule {}
