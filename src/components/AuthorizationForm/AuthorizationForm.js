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
    event.preventDefault();
    this.props.onSuccess(this.state.name);
  };

  isEmailValid = () => {
    const { email } = this.state;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !email || re.test(String(email).toLowerCase());
  };

  render() {
    const { name, email, password } = this.state;
    const isEmailValid = this.isEmailValid();

    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <TextInput
          name="name"
          type="text"
          label="Имя"
          placeholder="Имя"
          className="mb-1"
          value={name}
          onChange={this.handleChange}
        />
        <TextInput
          name="email"
          type="text"
          label="E-mail"
          placeholder="E-mail"
          className="mb-1"
          value={email}
          valid={isEmailValid}
          onChange={this.handleChange}
        />
        <TextInput
          name="password"
          type="password"
          label="Пароль"
          placeholder="Пароль"
          className="mb-2"
          value={password}
          onChange={this.handleChange}
        />
        <Button disabled={!(isEmailValid && name && password)}>
          Зарегистрироваться
        </Button>
      </form>
    );
  }
}

AuthorizationForm.propTypes = {
  onSuccess: PropTypes.func
};
