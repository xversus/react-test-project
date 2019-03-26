import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./TextInput.css";

export const TextInput = props => {
  const { className, label, ...rest } = props;
  return (
    <label className={classnames("text-input", { [className]: !!className })}>
      <div className="text-input__label">{label}</div>
      <input {...rest} className="text-input__field" />
    </label>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"]),
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
