import { BackButton } from '@/components/BackButton'
import { BorderCountry } from '@/components/BorderCountry'
import { getCountry } from '@/lib/services/getCountry'
import { getCountryByCodeRegion } from '@/lib/services/getCountryByCodeRegion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  params: {
    countryName: string
  }
}

export default async function CountryDetails({ params }: Props) {
  const countryData = await getCountry(params.countryName)
  const countriesByRegion = await getCountryByCodeRegion(
    countryData[0].borders || [],
  )

  const getNativeName = () => {
    if (
      countryData[0].name.nativeName &&
      Object.values(countryData[0].name.nativeName).length > 0
    ) {
      return Object.values(countryData[0].name.nativeName)[0].common || 'None'
    } else {
      return 'None'
    }
  }

  const getCurrencies = () => {
    if (
      countryData[0].currencies &&
      Object.values(countryData[0].currencies).length > 0
    ) {
      return Object.values(countryData[0].currencies)[0].name || 'None'
    } else {
      return 'None'
    }
  }

  const getLanguages = () => {
    if (
      countryData[0].languages &&
      Object.values(countryData[0].languages).length > 0
    ) {
      return Object.values(countryData[0].languages).map(
        (language, index, array) => (
          <span key={index}>
            {language}
            {index !== array.length - 1 && ','}
          </span>
        ),
      )
    } else {
      return 'None'
    }
  }

  return (
    <main>
      <BackButton />
      <div className="justify-between lg:flex lg:items-center lg:gap-16">
        <Image
          className="shadow-primary object-contain"
          width={600}
          height={600}
          src={countryData[0].flags.png}
          alt={countryData[0].flags.alt}
        />

        <div className="mt-6 flex-1">
          <h1 className="text-2xl font-extrabold">
            {countryData[0].name.common}
          </h1>
          <div className="mt-5 flex flex-wrap gap-9 lg:justify-between">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Native Name:</span>{' '}
                {getNativeName()}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{' '}
                {countryData[0].population.toLocaleString('en-Us')}
              </p>
              <p>
                <span className="font-semibold">Region:</span>{' '}
                {countryData[0].region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{' '}
                {countryData[0].subregion ? countryData[0].subregion : 'None'}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{' '}
                {countryData[0].capital.length > 0
                  ? countryData[0].capital
                  : 'None'}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{' '}
                {countryData[0].tld}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{' '}
                {getCurrencies()}
              </p>
              <p className="flex flex-wrap gap-1">
                <span className="font-semibold">Languages: </span>
                {getLanguages()}
              </p>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-4 lg:gap-2">
            <h2 className="text-lg font-semibold">Border Countries:</h2>
            <div className="flex flex-wrap gap-2 lg:mt-0">
              {countriesByRegion &&
                countriesByRegion?.map((country) => (
                  <Link href={country.name.common} key={country.name.common}>
                    <BorderCountry countryName={country.name.common} />
                  </Link>
                ))}
              {!countriesByRegion && 'None'}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
