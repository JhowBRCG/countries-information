import { ThemeButton } from '../ThemeButton'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="shadow-primary bg-white py-7 dark:bg-dark-theme-600">
      <div className="m-auto flex max-w-[1440px] justify-between px-5">
        <Link href="/">
          <h1 className="text-lg font-extrabold dark:text-white md:text-xl">
            Where in the world?
          </h1>
        </Link>
        <ThemeButton />
      </div>
    </header>
  )
}
