import { forwardRef } from "react";

import './index.scss'

export type TCheckbox = {
  checked: boolean,
  onClick?: () => void,
}

export const Checkbox = forwardRef<HTMLInputElement, TCheckbox>(({
  checked,
  onClick,
  ...props
}, ref) => {
  return (
    <div className="checkbox-wrapper"
      onClick={onClick}
    >
      <label
        className="checkbox"
      >
        <input
          className="checkbox__input"
          type="checkbox"
          defaultChecked={checked}
          ref={ref}
          {...props}
        />
        <div className="checkbox__content" />
      </label>
    </div>
  );
});
