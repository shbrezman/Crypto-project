export class coinDataModel{
  coinImg: string;
  exchangeDollar: number;
  exchangeEuro: number;
  exchangeShekel: number;

  constructor(img, exUsd, exEur, exIls){
    this.coinImg = img;
    this.exchangeDollar = exUsd;
    this.exchangeEuro = exEur;
    this.exchangeShekel = exIls;
  }
}
