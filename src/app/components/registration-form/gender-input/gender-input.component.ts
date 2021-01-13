import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-input',
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.scss']
})
export class GenderInputComponent implements OnInit {

  genders: string[] = ['male', 'female']

  constructor() { }

  ngOnInit(): void {
  }

}
