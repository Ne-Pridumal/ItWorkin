import { SearchIcon } from "@shared/ui/atoms/icons";
import { ChangeEvent, useRef, useState } from "react";

import './index.scss'

export type TInput = {
  value?: string,
  onChange?: (e: string) => void,
  placeholder?: string,
  onClick: () => void,
}

export const Input = ({
  onChange,
  value = '',
  placeholder,
  onClick,
}: TInput) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [focus, setFocus] = useState(false)
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    onChange?.(e.target.value)
  }
  const clickHandler = () => {
    setFocus(true)
    onClick?.()
  }
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  return (
    <div
      className={`input ${focus && 'input_focus'}`}
      onClick={clickHandler}
    >
      <SearchIcon
      />
      <input
        className="input__area"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
