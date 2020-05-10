import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathewsMendezPageRoutingModule } from './mathews-mendez-routing.module';

import { MathewsMendezPage } from './mathews-mendez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathewsMendezPageRoutingModule
  ],
  declarations: [MathewsMendezPage]
})
export class MathewsMendezPageModule {}
