import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  customerFormGroup: FormGroup;
  items: FormArray;
  addedItems: FormArray = new FormArray([]);
  productFormGroup: FormGroup;
  itemControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.customerFormGroup = this._formBuilder.group({
      name: [''],
      phoneNumber: ['']
    });
    this.productFormGroup = this._formBuilder.group({
      items: new FormArray([
        this._formBuilder.group({
          item: [''],
          quantity: [1],
          rate: [''],
          remark: ['']
        })
      ])
    })
  }


  addProducts() {
    const items = <FormArray>this.productFormGroup.get('items');
    items.push(
      this._formBuilder.group({
        item: [''],
        quantity: [1],
        rate: [''],
        remark: ['']
      })
    );
    this.addedItems.push(items)
  }

  onIncrement(index): void {
    const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(items.at(index).value.quantity) + 1;
    items.at(index).patchValue({
      quantity: [value]
    })

  }

  onDecrement(index): void {
    const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(items.at(index).value.quantity) - 1;
    items.at(index).patchValue({
      quantity: [value]
    })
  }
  onDecrementMinusFive(index) {
    const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(items.at(index).value.rate) - 5;
    items.at(index).patchValue({
      rate: [value]
    })
  }
  onDecrementMinusTen(index) {
    const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(items.at(index).value.rate) - 10;
    items.at(index).patchValue({
      rate: [value]
    })
  }
  onInclementPlusFive(index) {
    const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(items.at(index).value.rate) + 5;
    items.at(index).patchValue({
      rate: [value]
    })
  }
  onInclementPlusTen(index) {
    const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(items.at(index).value.rate) + 10;
    items.at(index).patchValue({
      rate: [value]
    })
  }
  shouldDisableDecrement(index): boolean {
    const items = <FormArray>this.productFormGroup.get('items');
    if (Number(items.at(index).value.quantity) <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
