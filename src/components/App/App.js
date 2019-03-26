import React from "react";
import { AuthorizationForm } from "../AuthorizationForm";
import { GithubChecker } from "../GithubChecker";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
      name: null
    };
  }

  handleSuccess = name => {
    this.setState({ authorized: true, name });
  };

  render() {
    const { authorized, name } = this.state;
    return (
      <div className="app-page">
        <div className="app-container">
          {authorized ? (
            <GithubChecker name={name} />
          ) : (
            <AuthorizationForm onSuccess={this.handleSuccess} />
          )}
        </div>
      </div>
    );
  }
}
