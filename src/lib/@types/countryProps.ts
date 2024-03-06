export type CountryProps = {
  name: {
    common: string
    nativeName?: NativeName
  }
  capital: string[]
  region: string
  population: number
  flags: {
    png: string
    alt: string
  }

  currencies?: Currencies
  languages?: Languages
  subregion?: string
  tld?: string[]
  borders?: string[]
}

type NativeName = {
  [key: string]: {
    common: string
  }
}

type Currencies = {
  [key: string]: {
    name: string
  }
}

type Languages = {
  [key: string]: string
}
