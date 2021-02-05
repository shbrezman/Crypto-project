import { coinCardModel } from './../../models/coin.model';
import { CoinsApiService } from './../../services/coins-api.service';
import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { coinDataModel } from 'src/app/models/coin.data.model';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css'],
})
export class CoinsListComponent implements OnInit {
  //basic variebales
  coins: coinCardModel[] = [];
  coinSearch: coinCardModel;
  onSearch = false;
  noResult = false;
  ii = '';
  flag = false;

  //spinner variables
  hideSppiner = false;

  //report list varieblaes
  reportList: coinCardModel[] = [];
  disabledBt = false;

  constructor(private data: CoinsApiService) {}

  ngOnInit(): any {
    this.initializeArray();
    this.hideSppiner = this.timeSpinner(1300);
  }

  //Find coin when user click search button
  search(searchTxt: string) {
    this.coinSearch = this.coins.find((coin) => coin.symbol === searchTxt);

    this.noResult = false;
    this.flag = false;

    for (let i = 0; i < this.coins.length; i++) {
      if (this.coins[i].symbol === searchTxt) {
        this.coins[i].hideCard = false;
        this.flag = true;
        this.noResult = false;
        this.onSearch = true;
      } else {
        this.coins[i].hideCard = true;
      }

      if (searchTxt === '' || !this.coins.includes(this.coinSearch)) {
        for (let i = 0; i < this.coins.length; i++) {
          this.coins[i].hideCard = false;
          this.onSearch = false;
        }
      }
      this.noResult = !this.flag;
    }

    this.ii = '';
  }

  //Initializing the coin list
  initializeArray() {
    this.data.getCoinsList().subscribe((coinsApi) => {
      this.coins = coinsApi as coinCardModel[];
      this.coins.length = 100;
      this.onSearch = false;
    });

    this.disabledBt = false;
    this.noResult = false;
    this.ii = '';
  }

  //Reduce item from the report list when the user click the checkbox (on report list modal)
  remove(report: coinCardModel) {
    for (let i = 0; i < this.reportList.length; i++) {
      if (this.reportList[i].id === report.id) {
        this.reportList.splice(i, 1);

        this.disabledBt = false;
      }
    }
    for (let i = 0; i < this.coins.length; i++) {
      if (this.coins[i].id === report.id) {
        this.coins[i].checked = false;
      }
    }
    for (let i = 0; i < this.coins.length; i++) {
      this.coins[i].disabled = false;
    }
  }

  //hide the soinner
  timeSpinner(x: number): any {
    setTimeout(() => {
      this.hideSppiner = true;
    }, x);
  }

  //show the full coin list again
  backToList() {
    for (let i = 0; i < this.coins.length; i++) {
      this.coins[i].hideCard = false;
    }
    this.disabledBt = false;
    this.noResult = false;
    this.ii = '';
    this.onSearch = false;
  }

  //Get the report list from card component
  updateFromChild(aa: coinCardModel[]) {
    this.reportList = aa;
  }
}
