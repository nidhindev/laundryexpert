import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { GoogleSheetService } from '../google-sheet.service';
import { Customer, Item } from './model'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  customerData: FormGroup;
  customerFormGroup: FormGroup;
  submitted = false;
  showSpinner = false;
  showResult = false;
  isResultNotFound = false;
  dataSource

  constructor(private googleSheetService: GoogleSheetService, private _formBuilder: FormBuilder) { }

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
    });
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
  getSheets(id, selectedStore): void {
    console.log(id + selectedStore)
    this.googleSheetService.getSheet(id, selectedStore)
      .subscribe((data: any[]) => {
        console.log(JSON.stringify(data))
        let customer: Customer = {
          name: data[0].name,
          phoneNumber: data[0].phoneNumber,
          billNumber: data[0].billNumber,
          date: data[0].date
        }
        let items: Array<Item> = []
        data.forEach(it => {
          let item:Item = {
            
          }

        });

        this.customerFormGroup = this._formBuilder.group({
          name: [customer.name],
          phoneNumber: [customer.phoneNumber],
          billNumber: [customer.billNumber],
          date: [customer.date],
        });
        this.showResult = true;
        this.showSpinner = false;
      });
  }
  get f() { return this.customerData.controls; }

}
