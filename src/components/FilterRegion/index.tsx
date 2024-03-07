'use client'

import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { useFilter } from '@/lib/contexts/filterContext'

const options = ['africa', 'america', 'asia', 'europe', 'oceania', 'antarctic']

export const FilterRegion = () => {
  const [selectedRegion, setSelectedRegion] = useState('')
  const [isDropDownOpen, setDropDownOpen] = useState(false)

  const { getRegionSelected } = useFilter()

  const dropDownToggle = () => {
    setDropDownOpen((prev) => !prev)
  }

  const handleRegion = (value: string) => {
    setSelectedRegion(value)
    getRegionSelected(value)
    dropDownToggle()
  }

  return (
    <div className="relative w-full">
      <div
        onClick={dropDownToggle}
        className="flex cursor-pointer items-center rounded-md bg-white p-4 shadow-primary dark:bg-dark-theme-600 dark:text-white"
      >
        <p className="flex-1 font-semibold">
          {selectedRegion
            ? selectedRegion[0].toUpperCase().concat(selectedRegion.slice(1))
            : 'Filter by Region'}
        </p>
        {isDropDownOpen ? (
          <FaAngleUp className="dark:text-white" />
        ) : (
          <FaAngleDown className="dark:text-white" />
        )}
      </div>
      {isDropDownOpen && (
        <ul className="absolute inset-0 z-10 mt-16 flex h-fit w-full flex-col rounded-md bg-white py-4 shadow-lg dark:bg-dark-theme-600">
          {options.map((option) => (
            <li
              onClick={() => handleRegion(option)}
              key={option}
              className="cursor-pointer px-4 py-2 font-semibold capitalize transition-all hover:bg-neutral-100 dark:hover:bg-dark-theme-400"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
