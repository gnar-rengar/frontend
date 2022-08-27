import React, { Component } from 'react';
import Error from './error';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Error type={500} />;
    }

    return children;
  }
}

export default ErrorBoundary;
