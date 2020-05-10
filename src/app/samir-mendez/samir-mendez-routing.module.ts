import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamirMendezPage } from './samir-mendez.page';

const routes: Routes = [
  {
    path: '',
    component: SamirMendezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamirMendezPageRoutingModule {}
