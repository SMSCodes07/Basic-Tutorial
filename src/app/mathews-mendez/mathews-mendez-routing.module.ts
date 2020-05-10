import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathewsMendezPage } from './mathews-mendez.page';

const routes: Routes = [
  {
    path: '',
    component: MathewsMendezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathewsMendezPageRoutingModule {}
