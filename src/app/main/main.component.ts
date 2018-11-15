import { Component, OnInit, Input } from '@angular/core';
import { Iitem } from '../shared/Iitem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input()
  public item: Iitem;

  constructor() { }

  ngOnInit() {
  }

}
