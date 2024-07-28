export type CountryDetails = {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
}

export type CapitalInfo = {
  latlng: number[];
}

export type Car = {
  signs: string[];
  side:  string;
}

export type CoatOfArms = {
}

export type Currencies = {
  SHP: Shp;
}

export type Shp = {
  name:   string;
  symbol: string;
}

export type Demonyms = {
  eng: Eng;
}

export type Eng = {
  f: string;
  m: string;
}

export type Flags = {
  png: string;
  svg: string;
}

export type Idd = {
  root:     string;
  suffixes: string[];
}

export type Languages = {
  eng: string;
}

export type Maps = {
  googleMaps:     string;
  openStreetMaps: string;
}

export type Name = {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export type NativeName = {
  eng: Translation;
}

export type Translation = {
  official: string;
  common:   string;
}