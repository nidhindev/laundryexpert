import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Shop, Customer, Item, Sheet } from './model'
import { sheetUpdator } from './objectConsolidator'
import { GoogleSheetService } from '../google-sheet.service';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from './result/result.component'
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  customerFormGroup: FormGroup;
  shopFormGroup: FormGroup;
  item: FormGroup;
  addedItems: FormArray;
  productFormGroup: FormGroup;
  itemControl = new FormControl();
  shops: string[] = ['Veloor', 'Velappaya', 'MgKavu'];
  itemOptions: Array<string> = [];
  remarkOptions: Array<string> = [];
  filteredOptions: Observable<string[]>;
  filteredRemarkOptions: Observable<string[]>;

  isitemPreviewEnabled: boolean;

  updateSuccess: boolean = false;
  isUpdated: boolean = false;
  notReady: boolean = true;
  responseHasError: boolean = false;
  priceList
  itemNameSubscription


  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog,
    private googleSheetService: GoogleSheetService) {
  }

  ngOnInit(): void {
    this.isitemPreviewEnabled = false
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
      isIroning: [false],
      quantity: [1],
      rate: [],
      remark: [''],
      itemPreviewIcon: ['circle-image-laundry']
    });
    this.shopFormGroup = this._formBuilder.group({
      shopName: [],
      date: [Date.now()]
    });
    this.googleSheetService.getBusinessConfig().subscribe(result => {
      for (let entry of JSON.parse(JSON.stringify(result)).pricing) {
        this.itemOptions.push(entry.key)
      }
      this.filteredOptions = this.item.get("item").valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterItem(value))
        );
      for (let remark of JSON.parse(JSON.stringify(result)).remarks) {
        this.remarkOptions.push(remark)
      }
      this.filteredRemarkOptions = this.item.get("remark").valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterRemark(value))
        );
      this.notReady = false
    });
    this.itemNameSubscription = this.item.get("item").valueChanges.subscribe(val => {
      this.googleSheetService.getBusinessConfig().subscribe(result => {
        this.priceList = JSON.parse(JSON.stringify(result)).pricing
        let priceObject = JSON.parse(JSON.stringify(result)).pricing.find(config => config.key == val)
        if (priceObject) {
          this.item.get("rate").setValue(Number(priceObject.value))
        }
      })

    })
  }
  ngDoCheck() {
    if (this.priceList) {
      this.itemNameSubscription = this.item.get("item").valueChanges.subscribe(val => {
        let priceObject = JSON.parse(JSON.stringify(this.priceList)).find(config => config.key == val)
        if (priceObject) {
          this.item.get("rate").setValue(Number(priceObject.value))
        }
      })
    }
  }

  onSubmit() {
    this.isUpdated = true
    let shop: Shop = {
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
        isIroning: Boolean(product.value.isIroning)
      }
      items.push(item);
    }
    let sheet: Sheet = sheetUpdator(shop, customer, items);
    this.googleSheetService.updateSheet(sheet)
      .subscribe((response: any) => {
        this.isUpdated = false
        if (response.updatedRows == items.length) {
          this.updateSuccess = true;
        } else {
          this.responseHasError = true;
        }
        const dialogRef = this.dialog.open(ResultComponent, {
          width: '250px',
          data: { updatedValues: response.updatedData.values[0] }
        });

        dialogRef.afterClosed().subscribe(result => {
          this.customerFormGroup.reset();
          this.shopFormGroup.reset();
          this.item.reset();
          this.productFormGroup = this._formBuilder.group({
            addedItems: new FormArray([
            ])
          });
          this.isitemPreviewEnabled = false;
        });

      });

  }
  addProducts() {
    const items = <FormArray>this.productFormGroup.get('addedItems');
    if (this.item.value.item !== '' && this.item.value.quantity > 0 && this.item.value.rate > 0)
    if(this.item.value.isIroning) {
      this.item.get('itemPreviewIcon').setValue('circle-image-ironing');
    }
      items.push(this.item)
    this.isitemPreviewEnabled = true;
    this.item = this._formBuilder.group({
      item: [''],
      isIroning: [false],
      quantity: [1],
      rate: [50],
      remark: [''],
      itemPreviewIcon: ['circle-image-laundry']
    });
    this.filteredOptions = this.item.get("item").valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterItem(value))
      );
    this.filteredRemarkOptions = this.item.get("remark").valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterRemark(value))
      );
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
  private _filterItem(value: string): string[] {
    const filterValue = value?.toLowerCase();
    return this.itemOptions.filter(option => option?.toLowerCase()?.includes(filterValue));

  }
  private _filterRemark(value: string): string[] {
    const filterValue = value?.toLowerCase();
    return this.remarkOptions.filter(option => option?.toLowerCase()?.includes(filterValue));
  }
} 