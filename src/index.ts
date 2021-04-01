import { CurrencyCode } from "./enums/currencyCode";
import { getRate } from "./rates";

export class Money {

  readonly currency: CurrencyCode;
  readonly amount: number;

  constructor(amount: number, currency: CurrencyCode) {
    this.currency = currency;
    this.amount = amount;
  }

  async convertTo(currency: CurrencyCode): Promise<Money> {
    const rate: number = await getRate(this.currency, currency);
    return new Money(this.amount * rate, currency);
  }
}

export { CurrencyCode };
export { Countries, Country } from "./countries";
