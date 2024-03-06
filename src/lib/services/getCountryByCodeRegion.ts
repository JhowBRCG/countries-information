import { CountryProps } from '../@types/countryProps'

export async function getCountryByCodeRegion(CodeRegion: string | string[]) {
  if (CodeRegion.length === 0) return

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${CodeRegion}&fields=name`,
  )

  if (!res.ok) {
    // notFound()
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<CountryProps[]>
}
