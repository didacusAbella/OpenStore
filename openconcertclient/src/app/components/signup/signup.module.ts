import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from "primeng/fieldset";
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AuthService } from 'src/app/shared/services/auth.service';


const SIGNUP_ROUTE: Routes = [
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule, ReactiveFormsModule, InputTextModule,
    FieldsetModule, PasswordModule, ButtonModule,
    SelectButtonModule,
    RouterModule.forChild(SIGNUP_ROUTE)
  ],
  providers: [AuthService],
  exports: [RouterModule]
})
export class SignupModule {}
