import { type CountryProps } from '../@types/countryProps'

export const getCountries = async () => {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,region,flags,capital,population',
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<CountryProps[]>
}
