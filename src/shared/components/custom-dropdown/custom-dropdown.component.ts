import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  isOpen = false;
  @Input() control: FormControl;
  @Input() options: Array<any>;
  
  currentName = ''

  constructor() { }

  ngOnInit(): void {
    this.currentName = this.options.find(element => element['value'] == this.control.value)['name']
  }

  toggle() {
    this.isOpen = !this.isOpen
    console.log(this.isOpen)
  }

  selectOption(value: string, name: string) {
    this.isOpen = false;
    this.currentName = name;
    this.control.setValue(value)
  }

}
