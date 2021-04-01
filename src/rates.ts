import axios from "axios";
import { CurrencyCode } from "./enums/currencyCode";

const URL = "https://api.exchangeratesapi.io/latest";

export async function getRate(from: CurrencyCode, to: CurrencyCode): Promise<number> {
  const response = await axios.get(URL, {
    params: {
      base: from,
      symbols: to,
    }
  });

  const { data } = response;

  const rate = data.rates[to];
  return rate;
}

