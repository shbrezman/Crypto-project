import { Component, Input, OnInit } from '@angular/core';
import { coinCardModel } from 'src/app/models/coin.model';
import { CoinsApiService } from 'src/app/services/coins-api.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() EE = new EventEmitter<coinCardModel[]>();
  @Input() coins;

  reportList: coinCardModel[] = [];
  coinsList:coinCardModel[] = [];

  constructor(private data: CoinsApiService) {
    //Initializing local array with the the input array
    this.coinsList = this.coins;
  }

  ngOnInit(): void {}

  //Add or reduce the report list when the user click the card chack box
  addToReportList(inp, coin: coinCardModel) {
    if (inp.checked) {
      if (!this.reportList.includes(coin)) {
        this.reportList.push(coin);
        coin.checked = true;
      }
    } else {
      for (let i = 0; i < this.reportList.length; i++) {
        if (this.reportList[i].id === coin.id) {
          this.reportList.splice(i, 1);
          for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].disabled = false;
          }
        }
      }
    }

    if (this.reportList.length > 4) {
      //this.disabledBt = true;
      for (let i = 0; i < this.coins.length; i++) {
        this.coins[i].disabled = true;
      }

      for (let i = 0; i < this.reportList.length; i++) {
        this.coins[this.coins.indexOf(this.reportList[i])].disabled = false;
      }
    }

    this.EE.emit(this.reportList);
  }

  //Get the specific card information from api when the user click the card "more info" button
  getByCoin(coinItem: coinCardModel) {
    if (!coinItem.onToggle || coinItem.onToggle === undefined) {
      this.data.getCoinData(coinItem.id).subscribe((coin: any) => {
        coinItem.coinImg = coin.image.small;
        coinItem.exchangeDollar = coin.market_data.atl.usd;
        coinItem.exchangeEuro = coin.market_data.atl.eur;
        coinItem.exchangeShekel = coin.market_data.atl.ils;
        coinItem.onToggle = true;
        console.log('innitail values of ' + coinItem.id);
      });
    } else {
      setTimeout(() => {
        coinItem.coinImg = null;
        coinItem.exchangeDollar = null;
        coinItem.exchangeEuro = null;
        coinItem.exchangeShekel = null;
        console.log('dellete values of ' + coinItem.id);
      }, 120 * 1000);
      coinItem.onToggle = false;
    }
  }
}
