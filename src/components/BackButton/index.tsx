import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

export const BackButton = () => {
  return (
    <Link
      className="dark:hover:bg-hover-dark shadow-primary mb-14 flex w-fit cursor-pointer items-center gap-3 rounded-md bg-white px-7 py-2 transition-colors hover:bg-neutral-100 dark:bg-dark-theme-600"
      href="/"
    >
      <FaLongArrowAltLeft />
      <p>Back</p>
    </Link>
  )
}
