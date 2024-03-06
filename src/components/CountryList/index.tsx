'use client'

import { useEffect, useState } from 'react'
import { CountryCard } from '../CountryCard'
import { type CountryProps } from '@/lib/@types/countryProps'
import { useFilter } from '@/lib/contexts/filterContext'
import Link from 'next/link'

type CountryListProps = {
  countriesData: CountryProps[]
}

export const CountryList = ({ countriesData }: CountryListProps) => {
  const [filteredCountries, setFilteredCountries] = useState(countriesData)
  const { filter } = useFilter()

  useEffect(() => {
    const filtered = countriesData.filter((country) => {
      const nameMatchers = country.name.common
        .toLowerCase()
        .includes(filter.filterCountry.toLowerCase())
      const regionMatchers = country.region
        .toLowerCase()
        .includes(filter.filterRegion.toLowerCase())
      return nameMatchers && regionMatchers
    })

    setFilteredCountries(filtered)
  }, [filter.filterCountry, filter.filterRegion])

  return (
    <>
      {filteredCountries.map((country: CountryProps) => (
        <Link href={`/${country.name.common}`} key={country.name.common}>
          <CountryCard country={country} />
        </Link>
      ))}

      {filteredCountries.length === 0 && (
        <p className="col-span-2 text-center lg:col-span-4">
          No results for "
          <span className="font-semibold">{filter.filterCountry}"</span>
        </p>
      )}
    </>
  )
}
