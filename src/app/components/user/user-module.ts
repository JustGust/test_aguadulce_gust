import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({

    declarations: [
        ListUsersComponent,
        FormUserComponent,
        DeleteUserComponent,
        FilterPipe
    ],

    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule

    ],
    
})
export class UserModule { }