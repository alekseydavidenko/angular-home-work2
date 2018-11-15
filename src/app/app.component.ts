import { Component, OnInit } from '@angular/core';
import { data } from './shared/data';
import { Iitem } from './shared/Iitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data$ = data;
  public item: Iitem;
  public typeFilter = 'all';

  ngOnInit() {
    data.subscribe((result: Iitem[]): void => {
      this.item = result[0];
    });
  }
  public onSelect(item): void {
    this.item = item;
  }
  public onChangeType(type): void {
    this.typeFilter = type;
    data.subscribe((result) => {
      if (type === 'all') {
        this.item = result[0];
      } else {
        for (let i = 0; i < result.length; i += 1) {
          if (result[i].type.toLowerCase() === type.toLowerCase()) {
            this.item = result[i];
            break;
          }
        }
      }
    });
  }
}


// https://docs.google.com/document/d/1_otbONlCxoCZt9pA8m83HnkN-BACkSGAAlgCdJhNUW0/edit
