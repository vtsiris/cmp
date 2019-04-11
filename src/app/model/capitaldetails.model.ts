import { Currencies } from './countriescurrencies.model';

export interface CapitalDetails {
alpha2Code: string;
alpha3Code: string;
area: number;
capital: string;
currencies: Currencies[];
flag: string;
name: string;
nativeName: string;
population: number;
region: string;
subregion: string;
}
