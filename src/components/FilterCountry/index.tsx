'use client'

import { ChangeEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useFilter } from '@/lib/contexts/filterContext'

export const FilterCountry = () => {
  const [tempQuery, setTemQuery] = useState('')
  const { getCountryQuery } = useFilter()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTemQuery(e.target.value)
    getCountryQuery(e.target.value)
  }

  return (
    <div className="shadow-primary overflow-hidden rounded-md">
      <div className="relative overflow-hidden">
        <FaSearch className="absolute inset-0 mb-auto ml-7 mt-auto text-lg text-light-mode-input dark:text-white" />
        <input
          className="w-full rounded-md py-4 indent-20 placeholder:text-light-mode-input dark:bg-dark-theme-600 dark:text-white placeholder:dark:text-white"
          type="text"
          placeholder="Search for a countrie..."
          onChange={handleOnChange}
          value={tempQuery}
          name="filter-country"
        />
      </div>
    </div>
  )
}
