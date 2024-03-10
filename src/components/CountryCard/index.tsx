import { type CountryProps } from '@/lib/@types/countryProps'
import Image from 'next/image'

type CountryCardProps = {
  country: CountryProps
}

export const CountryCard = ({ country }: CountryCardProps) => {
  const {
    name: { common },
    capital,
    flags: { png, alt },
    population,
    region,
  } = country

  return (
    <article className="overflow-hidden rounded-md bg-white shadow-primary transition-transform hover:-translate-y-5 dark:bg-dark-theme-600">
      <div className="w-full">
        <Image
          className="aspect-[18/11] w-full"
          src={png}
          alt={alt ? alt : common}
          width={264}
          height={500}
        />
      </div>
      <div className="p-8">
        <h2 className="mb-6 text-xl font-extrabold">{common}</h2>
        <p>
          <span className="font-semibold">Population: </span>
          {population.toLocaleString('en-US')}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital.length > 0 ? capital : 'None'}
        </p>
      </div>
    </article>
  )
}
