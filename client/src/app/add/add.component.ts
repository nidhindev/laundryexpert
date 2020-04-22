import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Shop, Customer, Item, Sheet } from './model'
import { sheetUpdator } from './objectConsolidator'
import { GoogleSheetService } from '../google-sheet.service';

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


  constructor(private _formBuilder: FormBuilder, private googleSheetService: GoogleSheetService) {
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

  onSubmit() {
    let shop: Shop = {
      invoice: this.shopFormGroup.value.invoice,
      date: this.shopFormGroup.value.date,
      shopName: this.shopFormGroup.value.shopName
    }
    let customer: Customer = {
      name: this.customerFormGroup.value.name,
      phoneNumber: this.customerFormGroup.value.phoneNumber
    }
    let items: Array<Item> = [];
    const products = this.productFormGroup.get('addedItems')['controls'];
    for (let product of products) {
      let item: Item = {
        name: product.value.item,
        quantity: product.value.quantity,
        rate: product.value.rate,
        remark: product.value.remark,
      }
      items.push(item);
    }
    let sheet: Sheet = sheetUpdator(shop, customer, items);
    this.googleSheetService.updateSheet(sheet)
      .subscribe((response: any[]) => {
        console.log('response: ' + JSON.stringify(response));
      });

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
      quantity: value
    })

  }

  onDecrement(index): void {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.quantity) - 1;
    this.item.patchValue({
      quantity: value
    })
  }
  onDecrementMinusFive(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) - 5;
    this.item.patchValue({
      rate: value
    })
  }
  onDecrementMinusTen(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) - 10;
    this.item.patchValue({
      rate: value
    })
  }
  onInclementPlusFive(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) + 5;
    this.item.patchValue({
      rate: value
    })
  }
  onInclementPlusTen(index) {
    //const items = <FormArray>this.productFormGroup.get('items');
    let value: number = Number(this.item.value.rate) + 10;
    this.item.patchValue({
      rate: value
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
