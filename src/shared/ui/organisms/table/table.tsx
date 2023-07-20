import { TTableItem, TableItem } from "./table-item/table-item";
import { Pagination } from "./pagination";
import { TPagination } from "./pagination/pagination";
import { TTableHeader, TableHeader } from "./table-header";

import './index.scss'



export type TTable = {
  items: TTableItem[],
  paginationProps: TPagination,
  headerProps: TTableHeader
}

export const Table = ({
  items,
  paginationProps,
  headerProps,
}: TTable) => {
  return (
    <table
      className="table"
    >
      <thead>
        <TableHeader
          {...headerProps}
        />
      </thead>
      <tbody
        className="table-body"
      >
        {items.map((props, index) => (
          <TableItem
            isEven={index % 2 === 0}
            {...props}
            key={props.id}
          />
        ))}
      </tbody>
      <tfoot
        className="table-footer"
      >
        <Pagination
          {...paginationProps}
        />
      </tfoot>
    </table>
  );
};
