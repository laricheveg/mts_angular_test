import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { ChannelsListComponent } from './components/channels/channels-list/channels-list.component';
import { ChannelsItemComponent } from './components/channels/channels-item/channels-item.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    CustomDropdownComponent,
    ChannelsListComponent,
    ChannelsItemComponent
],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    CommonModule,
    TooltipModule,
    CustomDropdownComponent,
    ChannelsListComponent,
    ChannelsItemComponent,
  ]
})
export class SharedModule { }
