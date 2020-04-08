import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumberValidator } from './phoneNumber-validator';
import { GoogleSheetService } from '../google-sheet.service';
import { allResolved } from 'q';


export interface PeriodicElement {
  phoneNumber?: string;
  billNumber?: string;
  name?: string;
  date?: string;
  iconName?: string;
  iconClass?: string;
  link?: string;
  items?: Item[];
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
  customerData: FormGroup;
  submitted = false;
  panelOpenState = false;
  constructor(private googleSheetService: GoogleSheetService) {
    this.customerData = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      custPhoneNumber: new FormControl('', [Validators.required, phoneNumberValidator])
    });
  }
  clickMessage = '';
  dataSource = [];
  showResult = false;
  isSearched: boolean;

  ngOnInit(): void {
    this.isSearched = false
  }
  onSubmit() {
    if (this.customerData.invalid) {
      return;
    } else {
      this.getSheets(this.customerData.value.custPhoneNumber);
      this.showResult = true;
      this.isSearched = true;
      this.submitted = true;
    }
  }

  getSheets(phoneNumber): void {
    const elements: PeriodicElement[] = [

    ];
    this.googleSheetService.getSheet(phoneNumber)
      .subscribe((data: any[]) => {
        data.forEach(it => {
          let iconName = '';
          let iconClass = '';
          let items = [];
          let allDone = false;
          let ready = false;
          let pending = false;
          let error = false;
          for (let itemRes of it.items) {
            console.log(itemRes.status)
            let item: Item = {
              name: itemRes.name,
              totalPieces: itemRes.totalPieces,
              finishedPieces: itemRes.finishedPieces
            }
            if (itemRes.status == 'Ready' || itemRes.status == 'Ready ') {
              item.iconName = 'check_circle';
              item.iconClass = 'done-icon';
              ready = true;
            } else if (itemRes.status == 'Pending ') {
              item.iconName = 'warning';
              item.iconClass = 'inprogress-icon';
              pending = true
            } else if (itemRes.status == 'Ready+return') {
              item.iconName = 'check_circle';
              item.iconClass = 'delivered-icon';
              pending = true;
            } else {
              item.iconName = 'error';
              item.iconClass = 'error-icon';
              error = true;
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
          }
          let element = { name: it.name, billNumber: it.billNumber, phoneNumber: it.phoneNumber, iconName: iconName, iconClass: iconClass, items: items }
          elements.push(element)
          console.log(elements)
        })
        this.dataSource = elements;
      });
  }

  get f() { return this.customerData.controls; }

  displayedColumns: string[] = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
}
