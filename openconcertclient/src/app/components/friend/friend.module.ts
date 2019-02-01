import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FriendComponent } from './friend.component';
import { FriendService } from './friend.service';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from "primeng/button";


const FRIEND_ROUTE: Routes = [
  { path: "friends", component: FriendComponent }
];

@NgModule({
  declarations: [ FriendComponent ],
  imports: [
    CommonModule, ReactiveFormsModule,
    PickListModule, ButtonModule,
    RouterModule.forChild(FRIEND_ROUTE)
  ],
  providers: [ FriendService ],
  exports: [ RouterModule ]
})
export class FriendModule {}