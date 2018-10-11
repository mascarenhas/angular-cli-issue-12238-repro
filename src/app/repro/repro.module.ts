import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReproComponent } from './repro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReproComponent
      }
    ])
  ],
  declarations: [ReproComponent]
})
export class ReproModule {}
