import type { ReactNode } from "react"

/** Real browser links so Chrome/Brave load the next page instead of a client swap. */
export default function SiteLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
