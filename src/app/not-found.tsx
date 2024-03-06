import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mt-4 text-center">
      <h1 className="text-2xl font-extrabold md:text-4xl">
        There was a problem.
      </h1>
      <div className="mt-7">
        <p>We could not find the page you were looking for.</p>
        <p>
          Go back to the{' '}
          <Link className="underline" href="/">
            Home page
          </Link>
        </p>
      </div>
    </main>
  )
}
