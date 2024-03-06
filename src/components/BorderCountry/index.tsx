type BorderCountryProps = {
  countryName: string
}

export const BorderCountry = ({ countryName }: BorderCountryProps) => {
  return (
    <div className="shadow-primary dark:hover:bg-hover-dark cursor-pointer rounded-md bg-white px-7 py-2 text-center transition-colors hover:bg-neutral-100 dark:bg-dark-theme-600 lg:py-1">
      {countryName}
    </div>
  )
}
