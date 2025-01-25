import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../lib/types';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to a monitoring service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Show the fallback passed in as a prop
      return this.props.fallback;
    }

    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
