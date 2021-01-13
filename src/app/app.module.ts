import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/registration-form/custom-input-werhouse/custom-input.component';
import { NameInputComponent } from './components/registration-form/name-input/name-input.component';
import { DateInputComponent } from './components/registration-form/date-input/date-input.component';
import { PhoneInputComponent } from './components/registration-form/phone-input/phone-input.component';
import { GenderInputComponent } from './components/registration-form/gender-input/gender-input.component';
import { AdressInputComponent } from './components/registration-form/adress-input/adress-input.component';
import { CityInputComponent } from './components/registration-form/city-input/city-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    CustomInputComponent,
    NameInputComponent,
    DateInputComponent,
    PhoneInputComponent,
    GenderInputComponent,
    AdressInputComponent,
    CityInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
