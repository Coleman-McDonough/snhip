export function publicOrigin() {
  const explicit =
    process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_API_URL
  if (explicit) {
    return explicit.replace(/\/$/, "")
  }
  const vercel = process.env.VERCEL_URL
  if (vercel) {
    return vercel.startsWith("http")
      ? vercel.replace(/\/$/, "")
      : `https://${vercel}`
  }
  return "http://localhost:3000"
}
