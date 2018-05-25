import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AComponent, BComponent]
})
export class FeatureModule { }
