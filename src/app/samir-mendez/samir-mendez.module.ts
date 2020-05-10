import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamirMendezPageRoutingModule } from './samir-mendez-routing.module';

import { SamirMendezPage } from './samir-mendez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamirMendezPageRoutingModule
  ],
  declarations: [SamirMendezPage]
})
export class SamirMendezPageModule {}
