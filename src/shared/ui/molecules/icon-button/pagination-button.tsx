import { ChevronIcon } from "@shared/ui/atoms/icons";

import './pagination-button.scss'

export type TPaginationButton = {
  direction: 'left' | 'right',
  disabled?: boolean,
  onClick?: () => void
}

export const PaginationButton = ({
  direction,
  disabled = false,
  onClick,
}: TPaginationButton) => {
  return (
    <button
      className={`pagination-button ${disabled && 'pagination-button_inactive'}`}
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronIcon
        direction={direction}
      />
    </button>
  );
};
