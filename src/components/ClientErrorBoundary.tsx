"use client"

import { Component, type ReactNode } from "react"

type Props = { children: ReactNode; fallback?: ReactNode }
type State = { failed: boolean }

function isNextBailout(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    (error as { digest?: string }).digest ===
      "BAILOUT_TO_CLIENT_SIDE_RENDERING"
  )
}

export default class ClientErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(error: unknown) {
    if (isNextBailout(error)) {
      throw error
    }
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return (
        this.props.fallback ?? (
          <p className="text-sm text-body-color">This section could not load.</p>
        )
      )
    }
    return this.props.children
  }
}
