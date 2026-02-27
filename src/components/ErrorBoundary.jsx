import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <pre style={{ color: "red" }}>{this.state.error.message}</pre>;
    }
    return this.props.children;
  }
}
