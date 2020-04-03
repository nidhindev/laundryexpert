import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumberValidator } from './phoneNuber-validator';
import { GoogleSheetService } from '../google-sheet.service';


export interface PeriodicElement {
  phoneNumber: string;
  billNumber: string;
  name: string;
  status: string;
  remark: string;
}

@Component({
  selector: 'app-get-status',
  templateUrl: './get-status.component.html',
  providers: [GoogleSheetService],
  styleUrls: ['./get-status.component.scss']
})


export class GetStatusComponent implements OnInit {
  customerData: FormGroup
  submitted = false
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
    // TODO: Use EventEmitter with form value
    console.warn(this.customerData.value);
    if (this.customerData.invalid) {
      return;
    } else {
      this.getSheets();
      this.showResult = true;
      this.isSearched = true;
      this.submitted = true;
    }
  }

  getSheets(): void {
    const elements: PeriodicElement[] = [];
    this.googleSheetService.getSheet()
      .subscribe((data: any[])=>{
        console.log(data);
        data.forEach(it =>{
          let element = { name: it.name, billNumber: it.billNumber, phoneNumber: it.phoneNumber, status: it.status, remark: it.remark }
          elements.push(element)
        })
        this.dataSource = elements;
      });
  }

  get f() { return this.customerData.controls; }

  displayedColumns: string[] = ['phoneNumber', 'name', 'billNumber', 'status', 'remark'];
}
