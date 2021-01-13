import { Config } from './../../../models/iformConfig';
import { Component, OnInit, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true
    }
  ]
})
export class NameInputComponent implements OnInit, ControlValueAccessor {


  currentValue! :string;
  onChange = (_: any) => { };
  onTouch = () => { };
  isDisabled!: boolean;
 // messages!: string |null;
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();
  //@Input() config!: Config | { Control : 'change', Triguer: false};

  name = new FormControl('', [Validators.required, Validators.maxLength(8)]);

  constructor() {
    this.currentValue = this.name.value
   }

  ngOnInit(): void {
  }

  showValue() {
    this.currentValue = this.name.value
    this.onChange(this.testing(this.currentValue));
    this.onTouch();
    this.parentFun.emit();
  }


  writeValue(value: string): void {
    if (value) {
      this.currentValue = value;
    }
  }

  // Interface methods
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  //custon functions
  // showMessage(mensaje: string) {
  //   this.messages = mensaje;
  //   setTimeout(() => {
  //     this.messages = null;
  //   }, 3000);
  // }

  testing( value:string) {
    console.log('evento disparado en el hijo con valor: ', value);
    return value;
  }






}
