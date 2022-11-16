import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CondenseHeaderComponent} from "./condense-header.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CondenseHeaderComponent],
  exports: [CondenseHeaderComponent]
})
export class CondenseHeaderComponentModule {
}
