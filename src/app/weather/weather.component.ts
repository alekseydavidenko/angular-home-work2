import { Component, OnInit, Input } from '@angular/core';
import { Iitem } from '../shared/Iitem';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input()
  public item: Iitem;

  constructor() { }

  ngOnInit() {
  }

}
