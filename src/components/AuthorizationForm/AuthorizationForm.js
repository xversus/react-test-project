import React from "react";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import PropTypes from "prop-types";
import "./AuthorizationForm.css";

export class AuthorizationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { onSuccess } = this.props;
    event.preventDefault();
    onSuccess();
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <TextInput
          name="name"
          type="text"
          label="Имя"
          className="mb-1"
          value={name}
          onChange={this.handleChange}
        />
        <TextInput
          name="email"
          type="email"
          label="E-mail"
          className="mb-1"
          value={email}
          onChange={this.handleChange}
        />
        <TextInput
          name="password"
          type="password"
          label="Пароль"
          className="mb-2"
          value={password}
          onChange={this.handleChange}
        />
        <Button>Зарегистрироваться</Button>
      </form>
    );
  }
}

AuthorizationForm.propTypes = {
  onSuccess: PropTypes.func
};
