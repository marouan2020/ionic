import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecandPagePageRoutingModule } from './secand-page-routing.module';

import { SecandPagePage } from './secand-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecandPagePageRoutingModule
  ],
  declarations: [SecandPagePage]
})
export class SecandPagePageModule {}
