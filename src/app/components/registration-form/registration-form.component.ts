import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, OnDestroy {

  dynamicFormArray: any;
  registrationForm!: FormGroup;
  triguerRef: Subscription | any;
  private subscriptions: Subscription[] | any = [];



  constructor(private httpClient: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    // se incializa el formGroup vacio;
    this.registrationForm = this.fb.group({});
    this.httpClient.get('http://localhost:3000/form-custom').subscribe(data => {
      this.dynamicFormArray = data;
      this.createFormControl();
    //  this.createFormListener();
      // this.createFormValidators();
    });
  }

  createFormControl(): void {
    // recorre el array para ir creando los controles
    this.dynamicFormArray.forEach((element: any) => {

      if (element.Required) {

        this.registrationForm.addControl(element.ID, new FormControl(element.Value, {
          validators: [Validators.required],
          updateOn: element.Control,
        }));
      } else {
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
    });

    console.log(this.registrationForm);
  }


  showStatus(): void {
    if (this.registrationForm.valid) {
      alert('Formulario enviado');
    } else {
      alert('Formulario no valido');
    }
  }

  parentFun() {
    console.log('function called from parent component');
    console.log(this.registrationForm);
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      for (const subscriton of this.subscriptions) {
        subscriton.unsubcribe();
      }
    }
  }

}
