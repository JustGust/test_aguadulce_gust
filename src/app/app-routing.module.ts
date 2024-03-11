import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', component: AppLayoutComponent,
      children: [
          { path: '', loadChildren: () => import('./components/user/user-module').then(m => m.UserModule)}
      ]
  },
  { path: '**', component: NotfoundComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
