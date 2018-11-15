import { Component, OnInit } from '@angular/core';
import { data } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data$ = data;
  public item;

  public onSelect(item) {
    this.item = item;
  }

  ngOnInit() {
    data.subscribe((result) => {

      this.item = result[0];
    });
  }
}


// https://docs.google.com/document/d/1_otbONlCxoCZt9pA8m83HnkN-BACkSGAAlgCdJhNUW0/edit
