import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrugsListComponent } from './components/drugs/drugs-list/drugs-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddDrugComponent } from './components/drugs/add-drug/add-drug.component';
import { EditDrugComponent } from './components/drugs/edit-drug/edit-drug.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    DrugsListComponent,
    LoginComponent,
    SignupComponent,
    AddDrugComponent,
    EditDrugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
