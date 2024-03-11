import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [FormUserComponent]
})
export class FormUserModule { }