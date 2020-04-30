import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { GoogleSheetService } from '../google-sheet.service';
import { OrderResponse, OrderModel, OrderStyle } from '../model';
import { consolidateUpdateRequest } from './updateHandler';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  customerData: FormGroup;
  customerFormGroup: FormGroup;
  orderFormGroup: FormGroup;
  submitted = false;
  showSpinner = false;
  showResult = false;
  isResultNotFound = false;
  dataSource

  constructor(private googleSheetService: GoogleSheetService,
    private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.customerData = new FormGroup({
      id: new FormControl([''], [Validators.required]),
      selectedStore: new FormControl('Veloor')
    });
    this.customerFormGroup = this._formBuilder.group({
      name: [''],
      phoneNumber: [''],
      billNumber: [''],
      date: [''],
      isItemReadyForDelivery: [''],
      isDelivered: [''],
      status: ['']
    });
    this.orderFormGroup = this._formBuilder.group({
      items: new FormArray([])
    })
  }
  onSubmit() {
    this.dataSource = [];
    if (this.customerData.invalid) {
      return;
    } else {
      this.showSpinner = true;
      this.isResultNotFound = false;
      this.showResult = false;
      this.getSheets(this.customerData.value.id, this.customerData.value.selectedStore);
      this.submitted = true;

    }
  }
  submit() {
    let orderModel: OrderModel = consolidateUpdateRequest(this.customerFormGroup,
      this.orderFormGroup, this.customerData);
    this.googleSheetService.updateOrder(orderModel).subscribe((data: OrderResponse) => {
      if (data.response[0].status == 200) {
        this.customerFormGroup.reset();
        this.orderFormGroup.reset();
        this._snackBar.open('Updated Successfully', 'Ok', {
          duration: 10000,
        });
        this.customerData = new FormGroup({
          id: new FormControl([''], [Validators.required]),
          selectedStore: new FormControl('Veloor')
        });
        this.customerFormGroup = this._formBuilder.group({
          name: [''],
          phoneNumber: [''],
          billNumber: [''],
          date: [''],
          isItemReadyForDelivery: [''],
          isDelivered: [''],
          status: ['']
        });
        this.orderFormGroup = this._formBuilder.group({
          items: new FormArray([])
        })
      }

      this.showSpinner = false;
      this.showResult = false;
      this.submitted = false;

    });


  }
  getSheets(id, selectedStore): void {
    this.googleSheetService.getSheet(id, selectedStore)
      .subscribe((data: OrderModel) => {
        if (data.orders.length > 0) {
          let orderStyle: OrderStyle = {
            statusIconName: 'errror',
            statusIconClass: 'error-icon'
          }
          let isItemReadyForDelivery = false;
          let isDelivered = false;
          let status = this.customerFormGroup.value.status;
          if (data.orders[0].status.toLowerCase() == 'pending') {
            this.customerFormGroup.get('status').setValue('Pending')
            orderStyle.statusIconName = 'build';
            orderStyle.statusIconClass = 'inprogress-icon';
          } else if (data.orders[0].status.toLowerCase() == 'done') {
            this.customerFormGroup.get('status').setValue('Done')
            isItemReadyForDelivery = true;
            orderStyle.statusIconName = 'done';
            orderStyle.statusIconClass = 'done-icon';
          } else if (data.orders[0].status.toLowerCase() == 'delivered') {
            this.customerFormGroup.get('status').setValue('Delivered')
            isItemReadyForDelivery = true;
            isDelivered = true;
            orderStyle.statusIconName = 'done_all';
            orderStyle.statusIconClass = 'delivered-icon';
          }
          this.customerFormGroup = this._formBuilder.group({
            name: [data.orders[0].customer.customerName],
            phoneNumber: [data.orders[0].customer.customerPhone],
            billNumber: [data.orders[0].orderNumber],
            date: [data.orders[0].orderDate],
            statusIconName: [orderStyle.statusIconName],
            statusIconClass: [orderStyle.statusIconClass],
            isItemReadyForDelivery: [isItemReadyForDelivery],
            isDelivered: [isDelivered],
            status: [status]
          });
          const items = <FormArray>this.orderFormGroup.get('items');
          for (let it of data.orders[0].items) {
            let finishedCount = 0;
            let returnCount = 0;
            if (it.finishedCount) {
              finishedCount = it.finishedCount;
            }
            if (it.returnCount) {
              returnCount = it.returnCount;
            }
            let itemPreviewIcon = 'circle-image-laundry'
            if (it.ironOnly.toLowerCase().toLowerCase() == 'true') {
              itemPreviewIcon = 'circle-image-ironing'
            }
            let item = this._formBuilder.group({
              ironOnly: it.ironOnly,
              rate: it.rate,
              totalCount: it.totalCount,
              finishedCount: finishedCount,
              itemName: it.itemName,
              remarks: it.remarks,
              returnCount: returnCount,
              itemPreviewIcon: itemPreviewIcon,
            });
            items.push(item);
          }
          this.showResult = true;
          this.showSpinner = false;
        } else {
          this.isResultNotFound = true;
          this.showSpinner = false
        }

      });
  }
  get f() { return this.customerData.controls; }

}
