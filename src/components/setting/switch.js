import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  checked: PropTypes.bool,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  switchClassName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

function Switch(props) {
  const { onChange, checked, placeholder, disabled, switchClassName } = props;
  return(
    <div className={`gallery-column-switch ${switchClassName || ''}`}>
      <label className="custom-switch">
        <input
          className="custom-switch-input"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name="custom-switch-checkbox"
          disabled={disabled}
        />
        <span className="custom-switch-description text-truncate">{placeholder}</span>
        <span className="custom-switch-indicator"></span>
      </label>
    </div>
  );
}

Switch.propTypes = propTypes;

export default Switch;
