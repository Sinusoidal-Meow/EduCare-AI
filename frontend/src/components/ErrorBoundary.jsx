// File: frontend/src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error in Kids Game:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-rose-50 border-4 border-slate-800 rounded-3xl max-w-xl mx-auto shadow-cartoon my-6">
          <span className="text-5xl">👾</span>
          <h3 className="text-xl font-black text-rose-800 mt-3">Game Connection Interrupted!</h3>
          <p className="text-xs text-slate-600 font-bold mt-1.5">
            The game module encountered a small issue. The rest of your portal is safe!
          </p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-5 px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs rounded-xl border-2 border-slate-800 shadow-cartoon"
          >
            Reboot Game 🔄
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}