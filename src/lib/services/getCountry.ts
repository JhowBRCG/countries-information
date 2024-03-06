import { notFound } from 'next/navigation'
import { CountryProps } from '../@types/countryProps'

export async function getCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`,
  )

  if (!res.ok) {
    notFound()
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<CountryProps[]>
}
