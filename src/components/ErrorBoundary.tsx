import React, { Component } from 'react'

interface IState {
  hasError: boolean
}

class ErrorBoundary extends Component<Record<string, unknown>, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error: any, info: any) : any {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That's not good..</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary