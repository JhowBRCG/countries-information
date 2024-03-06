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
      <div className="relative h-[199px] w-full">
        <Image
          className="object-cover"
          src={png}
          alt={alt ? alt : common}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
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
