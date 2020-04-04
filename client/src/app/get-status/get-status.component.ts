import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumberValidator } from './phoneNumber-validator';
import { GoogleSheetService } from '../google-sheet.service';


export interface PeriodicElement {
  phoneNumber: string;
  billNumber: string;
  name: string;
  status: string;
  remark: string;
  iconName: string;
  iconClass: string;
  items: Item[];
}

export interface Item {
  name: string;
  quantity: string;
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
      {
        name: 'nidhin',
        billNumber: '1212',
        phoneNumber: '9789821252',
        status: 'in progress',
        remark: 'on track',
        iconName: 'error',
        iconClass: 'error-icon',
        items:[
          {
            name: 'Shirt',
            quantity: '4'
          },
          {
            name: 'Pant',
            quantity: '10'
          },
          {
            name: 'Saree',
            quantity: '2'
          }
        ]
      },
      {
        name: 'nidhin',
        billNumber: '1212',
        phoneNumber: '9789821252',
        status: 'in progress',
        remark: 'on track',
        iconName: 'error',
        iconClass: 'error-icon',
        items:[
          {
            name: 'Shirt',
            quantity: '4'
          },
          {
            name: 'Pant',
            quantity: '10'
          },
          {
            name: 'Saree',
            quantity: '2'
          }
        ]
      }];
    this.dataSource = elements;
    // this.googleSheetService.getSheet(phoneNumber)
    //   .subscribe((data: any[])=>{
    //     data.forEach(it =>{
    //       let element = { name: it.name, billNumber: it.billNumber, phoneNumber: it.phoneNumber, status: it.status, remark: it.remark }
    //       elements.push(element)
    //     })
    //     this.dataSource = elements;
    //   });
  }

  get f() { return this.customerData.controls; }

  displayedColumns: string[] = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
}
