import { Input } from "@shared/ui/molecules/input";
import { Table } from "@shared/ui/organisms/table";
import { TTableItem } from "@shared/ui/organisms/table/table-item/table-item";
import { Selector, TSelector } from "@shared/ui/molecules/selector";
import { useState } from "react";
import { TPagination } from "@shared/ui/organisms/table/pagination/pagination";
import { TTableHeader } from "@shared/ui/organisms/table/table-header";

import './index.scss'


export type TTablePage = {
  onSearchChange?: (e: string) => void,
  tableItems: TTableItem[],
  searchSelectorProps: TSelector,
  paginationProps: TPagination,
  headerProps: TTableHeader,
}

export const TablePage = ({
  paginationProps,
  onSearchChange,
  searchSelectorProps,
  tableItems,
  headerProps,
}: TTablePage) => {
  const [showSelector, setShowSelector] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const changeHandler = (e: string) => {
    setInputValue(e)
    setShowSelector(true)
    onSearchChange?.(e)
  }
  const selectorClick = (e: string) => {
    setShowSelector(false)
    searchSelectorProps.onItem?.(e)
  }
  return (
    <div
      className="table-page"
    >
      <div
        className="table-page__controller"
      >
        <div className="search">
          <Input
            onClick={() => setShowSelector(!showSelector)}
            value={inputValue}
            onChange={changeHandler}
            placeholder=""
          />
          <div
            className={`search__selector-wrapper ${showSelector && 'search__selector-wrapper_active'}`}
          >
            <Selector
              onItem={selectorClick}
              items={searchSelectorProps.items}
              activeItem={searchSelectorProps.activeItem}
            />
          </div>
        </div>
      </div>
      <div
        className="table-page__table"
      >
        <Table
          paginationProps={paginationProps}
          items={tableItems}
          headerProps={headerProps}
        />
      </div>
    </div>
  );
};
