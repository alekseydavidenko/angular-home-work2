import { Component, OnInit, Input } from '@angular/core';
import { Iitem } from '../shared/Iitem';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.scss']
})
export class SocialInfoComponent implements OnInit {

  @Input()
  public item: Iitem;

  constructor() { }

  ngOnInit() {
  }

}
