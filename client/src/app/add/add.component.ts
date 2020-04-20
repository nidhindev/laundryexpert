import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  customerFormGroup: FormGroup;
  shopFormGroup: FormGroup;
  item: FormGroup;
  addedItems: FormArray = new FormArray([]);
  productFormGroup: FormGroup;
  itemControl = new FormControl();
  shops: string[] = ['Veloor', 'Velappaya', 'MgKavu'];
  filteredOptions: Observable<string[]>;


  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.customerFormGroup = this._formBuilder.group({
      name: [''],
      phoneNumber: ['']
    });
    this.productFormGroup = this._formBuilder.group({
      addedItems: new FormArray([
      ])
    });
    this.item = this._formBuilder.group({
      item: [''],
      quantity: [1],
      rate: [50],
      remark: ['']
    });
    this.shopFormGroup = this._formBuilder.group({
      invoice: [new Date().getTime()],
      shopName: [this.shops[0]],
      date: [Date.now()]
    })
  }


  addProducts() {
    const items = <FormArray>this.productFormGroup.get('addedItems');
    if (this.item.value.item !== '' && this.item.value.quantity > 0 && this.item.value.rate > 0)
      items.push(this.item)
    this.item = this._formBuilder.group({
      item: [''],
      quantity: [1],
      rate: [50],
      remark: ['']
    })
  }

  onIncrement(index): void {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.quantity) + 1;
    this.item.patchValue({
      quantity: [value]
    })

  }

  onDecrement(index): void {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.quantity) - 1;
    this.item.patchValue({
      quantity: [value]
    })
  }
  onDecrementMinusFive(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) - 5;
    this.item.patchValue({
      rate: [value]
    })
  }
  onDecrementMinusTen(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) - 10;
    this.item.patchValue({
      rate: [value]
    })
  }
  onInclementPlusFive(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) + 5;
    this.item.patchValue({
      rate: [value]
    })
  }
  onInclementPlusTen(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) + 10;
    this.item.patchValue({
      rate: [value]
    })
  }
  shouldDisableDecrement(index): boolean {
    //const items = <FormArray>this.productFormGroup.get('items');
    if (Number(this.item.value.quantity) <= 0) {
      return true;
    } else {
      return false;
    }
  }
} 
