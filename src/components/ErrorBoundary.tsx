import React, { Component, ErrorInfo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  public static getDerivedStateFromError(_: Error): IState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Ooops. That's not good..</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary