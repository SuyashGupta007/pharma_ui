import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsListComponent } from './components/drugs/drugs-list/drugs-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddDrugComponent } from './components/drugs/add-drug/add-drug.component';
import { EditDrugComponent } from './components/drugs/edit-drug/edit-drug.component';
import {authguard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component:DrugsListComponent,
    canActivate:[authguard]

  },
  {
    path: 'drugs',

    component:DrugsListComponent,
    canActivate:[authguard]

  },
  {
    path: 'login',

    component:LoginComponent,


  },
  {
    path: 'signup',

    component:SignupComponent,


  },
  {
    path:'drugs/add',
    component:AddDrugComponent,
    canActivate:[authguard]
  },
  {
    path:'drugs/edit/:id',
    component:EditDrugComponent,
    canActivate:[authguard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
