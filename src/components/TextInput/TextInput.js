import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./TextInput.css";

export const TextInput = props => {
  const { className, label, valid, ...rest } = props;
  return (
    <label className={classnames("text-input", { [className]: !!className })}>
      <div
        className={classnames("text-input__label", {
          "text-input__label_invalid": !valid
        })}
      >
        {label}
      </div>
      <input
        {...rest}
        className={classnames("text-input__field", {
          "text-input__field_invalid": !valid
        })}
      />
    </label>
  );
};

TextInput.defaultProps = {
  valid: true,
  type: "text"
};

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  valid: PropTypes.bool
};
