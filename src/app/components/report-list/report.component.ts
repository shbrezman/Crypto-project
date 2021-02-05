import { coinCardModel } from './../../models/coin.model';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {



  @Input() reportList;


  constructor() {

  }

  ngOnInit(): void {
  }





}

