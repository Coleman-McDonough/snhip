"use client"

import { Component, type ReactNode } from "react"

type Props = { children: ReactNode; fallback?: ReactNode }
type State = { failed: boolean }

export default class ClientErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError() {
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
