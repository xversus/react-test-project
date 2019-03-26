import React from "react";
import { AuthorizationForm } from "../AuthorizationForm";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false
    };
  }

  handleSuccess = () => {
    this.setState({ authorized: true });
  };

  render() {
    const { authorized } = this.state;
    return (
      <div className="app-page">
        <div className="app-container">
          {authorized ? (
            <div />
          ) : (
            <AuthorizationForm onSuccess={this.handleSuccess} />
          )}
        </div>
      </div>
    );
  }
}
