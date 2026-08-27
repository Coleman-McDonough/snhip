"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-[#FCFCFC] px-4 py-28 text-center">
        <h1 className="mb-4 text-2xl font-bold text-black">
          Something went wrong
        </h1>
        <p className="mb-8 text-base text-[#637381]">
          The page hit a client error. Try again, or open Contact Us from the menu.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-sm bg-[#063646] px-8 py-3 text-base font-medium text-white"
        >
          Try again
        </button>
      </body>
    </html>
  )
}
