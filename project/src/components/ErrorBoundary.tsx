// Remove unused React
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-hacker-dark flex items-center justify-center p-4">
          <div className="bg-black/80 border border-red-500/50 rounded-lg p-8 max-w-md w-full text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-mono text-red-500 mb-4">
              {'>'} SYSTEM_ERROR
            </h1>
            <p className="text-gray-400 font-mono text-sm mb-6">
              An unexpected error occurred in the matrix. The system needs to be rebooted.
            </p>
            <button
              onClick={this.handleReload}
              className="flex items-center space-x-2 mx-auto px-6 py-3 bg-transparent border-2 border-red-500 text-red-500 font-mono hover:bg-red-500 hover:text-black transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              <span>[REBOOT_SYSTEM]</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;