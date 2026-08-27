"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="relative z-10 px-4 py-28 text-center">
      <h1 className="mb-4 text-2xl font-bold text-black dark:text-white">
        Something went wrong
      </h1>
      <p className="mb-8 text-body-color">
        This page hit a client error. Try again, or open Contact Us from the
        menu.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-sm bg-primary px-8 py-3 text-base font-medium text-white"
      >
        Try again
      </button>
    </section>
  )
}
