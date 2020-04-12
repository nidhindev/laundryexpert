import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoogleSheetService } from '../google-sheet.service';
import { Item, PeriodicElement } from './model';
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
      console.log("matched: " + result.matches)
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
    console.log(selectedStore)
    const elements: PeriodicElement[] = [];
    this.googleSheetService.getSheet(phoneNumber, selectedStore)
      .subscribe((data: any[]) => {
        data.forEach(it => {
          let iconName = '';
          let iconClass = '';
          let items = [];
          let ready = false;
          let pending = false;
          let error = false;
          let state: string;
          for (let itemRes of it.items) {
            let item: Item = {
              name: itemRes.name,
              totalPieces: itemRes.totalPieces,
              finishedPieces: itemRes.finishedPieces,
              damagedPieces: itemRes.damagedPieces
            }
            if (itemRes.status == 'Ready' || itemRes.status == 'Ready ') {
              item.iconName = 'check_circle';
              item.iconClass = 'done-icon';
              state = 'ready for delivery';
              ready = true;
            } else if (itemRes.status == 'Pending ') {
              item.iconName = 'warning';
              item.iconClass = 'inprogress-icon';
              state = 'in process';
              pending = true
            } else if (itemRes.status == 'Ready+return') {
              item.iconName = 'check_circle';
              item.iconClass = 'delivered-icon';
              pending = true;
              state = 'ready for delivery';
            } else {
              item.iconName = 'error';
              item.iconClass = 'error-icon';
              error = true;
              state = 'in process';
            }
            items.push(item);
          }

          if (ready == true && pending !== true && error !== true) {
            iconName = 'check_circle';
            iconClass = 'done-icon';
          } else if (pending == true && error !== true) {
            iconName = 'warning';
            iconClass = 'inprogress-icon';
          } else {
            iconName = 'error';
            iconClass = 'error-icon';
            state = 'in process';
          }
          const link = `https://wa.me/${it.phoneNumber}?text=*THE LAUNDRY EXPERT*
          %0AHi ${it.name}, 
          %0AYour material is _${state}_.
          %0A_Looking forward to working with you again soon._ Thank you for choosing us.
          %0AThe Laundry Expert 😀`
          let element = {
            name: it.name, billNumber: it.billNumber, date: it.date, dueDate: it.dueDate,
            phoneNumber: it.phoneNumber, total: it.total, link: link, iconName: iconName,
            iconClass: iconClass, items: items
          }
          elements.push(element)
        })
        if (elements.length > 0) {
          this.showResult = true;
          this.submitted = false;
        } else {
          this.isResultNotFound = true;
          this.submitted = false;
        }
        this.showSpinner = false;
        this.dataSource = elements;
      });
  }

  get f() { return this.customerData.controls; }

  displayedColumns: string[] = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
}
