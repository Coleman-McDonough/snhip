"use client"

import dynamic from "next/dynamic"
import { Component, type ReactNode } from "react"

const HCaptcha = dynamic(() => import("@hcaptcha/react-hcaptcha"), {
  ssr: false,
})

const TEST_SITEKEY = "10000000-ffff-ffff-ffff-000000000001"

class CaptchaErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError(error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "digest" in error &&
      (error as { digest?: string }).digest ===
        "BAILOUT_TO_CLIENT_SIDE_RENDERING"
    ) {
      throw error
    }
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return (
        <p className="text-sm text-body-color">
          Verification could not load. Call us and we will help you from there.
        </p>
      )
    }
    return this.props.children
  }
}

export default function CaptchaField({
  onVerify,
}: {
  onVerify: (token: string) => void
}) {
  const sitekey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || TEST_SITEKEY

  return (
    <CaptchaErrorBoundary>
      <HCaptcha sitekey={sitekey} onVerify={onVerify} />
    </CaptchaErrorBoundary>
  )
}
