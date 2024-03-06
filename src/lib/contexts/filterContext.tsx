'use client'

import { createContext, useContext, useState } from 'react'

type FilterContextProps = {
  filter: {
    filterCountry: string
    filterRegion: string
  }
  getCountryQuery: (query: string) => void
  getRegionSelected: (region: string) => void
}

type FilterContextProvider = {
  children: React.ReactNode
}

const FilterContext = createContext<FilterContextProps | null>(null)

export const FilterContextProvider = ({ children }: FilterContextProvider) => {
  const [filter, setFilter] = useState({
    filterCountry: '',
    filterRegion: '',
  })

  const getCountryQuery = (query: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, filterCountry: query }))
  }

  const getRegionSelected = (region: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, filterRegion: region }))
  }

  return (
    <FilterContext.Provider
      value={{ filter, getCountryQuery, getRegionSelected }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error(
      'SearchQueryContext must be used within a PlayerContextProvider',
    )
  }
  return context
}
