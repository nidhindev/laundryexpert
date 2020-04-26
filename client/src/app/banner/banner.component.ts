import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  links = [{'label': 'Search', 'path':'./search'}, {'label': 'Add', 'path':'./add'}, {'label': 'Update', 'path':'update'}];
  activeLink = this.links[0];
  constructor() { }

  ngOnInit(): void {
  }

}
