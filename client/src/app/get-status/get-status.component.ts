import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoogleSheetService } from '../google-sheet.service';
import { Item, Order, Customer, OrderModel, OrderStyle } from '../model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-get-status',
  templateUrl: './get-status.component.html',
  providers: [GoogleSheetService],
  styleUrls: ['./get-status.component.scss']
})


export class GetStatusComponent implements OnInit {
  customerData: FormGroup;
  submitted = false;
  panelOpenState = false;
  contentClass = 'web-status-margin';
  constructor(private googleSheetService: GoogleSheetService, breakpointObserver: BreakpointObserver) {
    this.customerData = this.createFormGroup();
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.contentClass = 'mobile-status-margin';
      }
    });
  }
  createFormGroup() {
    return new FormGroup({
      id: new FormControl('', [Validators.required]),
      selectedStore: new FormControl('Veloor')
    });
  }
  clickMessage = '';
  dataSource;
  showResult = false;
  showSpinner = false;
  isResultNotFound = false;

  ngOnInit(): void {
    this.dataSource = [];
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

  getSheets(phoneNumber, selectedStore): void {
    const orders: Order[] = [];
    this.googleSheetService.getSheet(phoneNumber, selectedStore)
      .subscribe((data: OrderModel) => {
        data.orders.forEach(it => {
          let items = [];
          let orderStyle: OrderStyle = {
            statusIconName: 'errror',
            statusIconClass: 'error-icon'
          }
          if (it.status == 'PENDING') {
            orderStyle.statusIconName = 'build';
            orderStyle.statusIconClass = 'inprogress-icon';
          } else if (it.status == 'DONE') {
            orderStyle.statusIconName = 'done';
            orderStyle.statusIconClass = 'done-icon';
          } else if (it.status == 'DELIVERED') {
            orderStyle.statusIconName = 'done_all';
            orderStyle.statusIconClass = 'delivered-icon';
          }
          let customer: Customer = {
            customerName: it.customer.customerName,
            customerPhone: it.customer.customerPhone
          }
          for (let itemRes of it.items) {
            let item: Item = {
              seqNumber: itemRes.seqNumber,
              itemName: itemRes.itemName,
              ironOnly: itemRes.ironOnly,
              rate: itemRes.rate,
              totalCount: itemRes.totalCount,
              finishedCount: itemRes.finishedCount,
              returnCount: itemRes.returnCount,
              remarks: itemRes.remarks
            }
            items.push(item);
          }

          const link = `https://wa.me/${it.customer.customerPhone}?text=*THE LAUNDRY EXPERT*
          %0AHi ${it.customer.customerName}, 
          %0AYour material is _${it.status}_.
          %0A_Looking forward to working with you again soon._ Thank you for choosing us.
          %0AThe Laundry Expert 😀`
          let order: Order = {
            storeName: it.storeName,
            orderNumber: it.orderNumber,
            customer: customer,
            orderDate: it.orderDate,
            dueDate: it.dueDate,
            status: it.status,
            link: link,
            items: items,
            estimatedCost: it.estimatedCost,
            orderStyle: orderStyle
          }
          orders.push(order)
        })
        if (orders.length > 0) {
          this.showResult = true;
          this.submitted = false;
        } else {
          this.isResultNotFound = true;
          this.submitted = false;
        }
        this.showSpinner = false;
        this.dataSource = orders;
      });
  }

  get f() { return this.customerData.controls; }

  displayedColumns: string[] = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
}
