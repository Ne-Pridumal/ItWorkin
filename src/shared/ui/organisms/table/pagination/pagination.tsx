import { ChevronIcon } from "@shared/ui/atoms/icons";
import { Typography } from "@shared/ui/atoms/typography";
import { PaginationButton } from "@shared/ui/molecules/icon-button";
import { Selector, TSelector } from "@shared/ui/molecules/selector";
import { useState } from "react";

import './index.scss'

export type TPagination = {
  itemsSelected: [number, number],
  totalItems: number,
  onNextPage: () => void,
  onPrevPage: () => void,
  currentPage: number,
  totalPages: number,
  selectorProps: TSelector,
}

export const Pagination = ({
  totalPages,
  selectorProps,
  currentPage,
  onPrevPage,
  onNextPage,
  totalItems,
  itemsSelected,
}: TPagination) => {
  const [showSelector, setShowSelector] = useState(false)

  const selectorHandler = () => {
    setShowSelector(!showSelector)
  }
  return (
    <tr
      className="pagination"
    >
      <td
        className="pagination__pages"
      >
        <Typography
          variant="caption"
        >
          {itemsSelected[0]}-{itemsSelected[1]} of {totalItems}
        </Typography>
      </td>
      <td
        className="pagination__activities"
      >
        <div
          className="pagination__settings"
          onClick={selectorHandler}
        >
          <Typography>
            Rows per page: {selectorProps.activeItem}
          </Typography>
          <ChevronIcon
            direction="down"
            width={16}
            height={16}
            color="#868FA0"
          />
          <div
            className={`pagination__selector-wrapper ${showSelector && 'pagination__selector-wrapper_active'}`}
          >
            <Selector
              {...selectorProps}
            />
          </div>
        </div>
        <div
          className="pagination__controllers"
        >
          <PaginationButton
            direction="left"
            onClick={onPrevPage}
          />
          <Typography
            variant="caption"
          >
            <span>{currentPage}</span>/{totalPages}
          </Typography>
          <PaginationButton
            direction="right"
            onClick={onNextPage}
          />
        </div>
      </td>
    </tr>
  );
};
