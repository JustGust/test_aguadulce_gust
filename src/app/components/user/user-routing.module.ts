import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormUserComponent } from './form-user/form-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: 'lista', pathMatch: 'full'},
        { path: 'lista', component: ListUsersComponent },
        { path: 'formulario', component: FormUserComponent },
        { path: 'eliminar', component: DeleteUserComponent },
    ])],
    exports: [RouterModule]
})
export class UserRoutingModule { }