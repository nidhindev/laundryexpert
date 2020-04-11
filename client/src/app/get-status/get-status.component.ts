import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumberValidator } from './phoneNumber-validator';
import { GoogleSheetService } from '../google-sheet.service';
import { element } from 'protractor';

export interface PeriodicElement {
  phoneNumber: string;
  billNumber: string;
  name?: string;
  date?: Date;
  iconName?: string;
  iconClass?: string;
  link?: string;
  items?: Item[];
  total?: number;
  dueDate?: Date;
}

export interface Item {
  name?: string;
  totalPieces?: string;
  finishedPieces?: string;
  status?: string;
  iconName?: string;
  iconClass?: string;
}

@Component({
  selector: 'app-get-status',
  templateUrl: './get-status.component.html',
  providers: [GoogleSheetService],
  styleUrls: ['./get-status.component.scss']
})


export class GetStatusComponent implements OnInit {
  today: number = Date.now();
  customerData: FormGroup;
  submitted = false;
  panelOpenState = false;
  constructor(private googleSheetService: GoogleSheetService) {
    this.customerData = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      custPhoneNumber: new FormControl('', [Validators.required]),
      selectedStore: new FormControl('Veloor')
    });
  }
  clickMessage = '';
  dataSource = [];
  showResult = false;
  isSearched: boolean;

  ngOnInit(): void {
    this.isSearched = false;
  }
  onSubmit() {
    if (this.customerData.invalid) {
      return;
    } else {
      this.getSheets(this.customerData.value.custPhoneNumber, this.customerData.value.selectedStore);
      this.isSearched = true;
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
              finishedPieces: itemRes.finishedPieces
            }
            if (itemRes.status == 'Ready' || itemRes.status == 'Ready ') {
              item.iconName = 'check_circle';
              item.iconClass = 'done-icon';
              state = 'ready';
              ready = true;
            } else if (itemRes.status == 'Pending ') {
              item.iconName = 'warning';
              item.iconClass = 'inprogress-icon';
              state = 'is being processed';
              pending = true
            } else if (itemRes.status == 'Ready+return') {
              item.iconName = 'check_circle';
              item.iconClass = 'delivered-icon';
              pending = true;
              state = 'is returned';
            } else {
              item.iconName = 'error';
              item.iconClass = 'error-icon';
              error = true;
              state = 'is being processed';
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
            state = 'is being processed';
          }
          console.log("date: " + it.date)
          const link = `https://wa.me/${it.phoneNumber}?text=Hi ${it.name} \r\nThanks for reaching us out!. Your Order No: ${it.billNumber} is ${state}. \r\n The Laundry Expert`
          let element = {
            name: it.name, billNumber: it.billNumber, date: it.date, dueDate: it.dueDate,
            phoneNumber: it.phoneNumber, total: it.total, link: link, iconName: iconName,
            iconClass: iconClass, items: items
          }
          elements.push(element)
        })
        if (elements.length > 0) {
          this.showResult = true;
        }
        this.dataSource = elements;
      });
  }

  get f() { return this.customerData.controls; }

  displayedColumns: string[] = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
}
