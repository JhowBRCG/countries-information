import { FilterCountry } from '@/components/FilterCountry'
import { FilterRegion } from '@/components/FilterRegion'
import { getCountries } from '@/lib/services/getCountries'
import { CountryList } from '@/components/CountryList'
import { FilterContextProvider } from '@/lib/contexts/filterContext'

export default async function Home() {
  const countriesData = await getCountries()

  return (
    <main>
      <FilterContextProvider>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="md:w-[40%]">
            <FilterCountry />
          </div>
          <div className="w-[70%] md:w-[25%]">
            <FilterRegion />
          </div>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          <CountryList countriesData={countriesData} />
        </div>
      </FilterContextProvider>
    </main>
  )
}
