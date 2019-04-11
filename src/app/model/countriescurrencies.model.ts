export interface Countries {
  capital: string;
  name: string;
  currencies: Currencies[];
}

export interface Currencies {
  code: string;
  name: string;
  symbol; string;
}

export interface Currency {
  name: string;
}
