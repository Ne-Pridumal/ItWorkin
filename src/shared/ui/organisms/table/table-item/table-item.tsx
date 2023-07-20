import { Checkbox } from "@shared/ui/atoms/checkbox";
import { Typography } from "@shared/ui/atoms/typography";
import { TTag, Tag } from "@shared/ui/molecules/tag";

import './index.scss'


export type TTableItem = {
  id: number,
  name: string,
  subId: string,
  description: string,
  status: TTag['type'],
  gender: string,
  location: string,
  species: string,
  isEven?: boolean,
}

export const TableItem = ({
  species,
  location,
  gender,
  status,
  id,
  name,
  description,
  isEven,
  subId,
}: TTableItem) => {
  return (
    <tr
      className={`table-item ${isEven && 'table-item_even'}`}
    >
      <td
        className="table-item__checkbox"
      >
        <Checkbox
          checked={false}
        />
      </td>
      <td
        className="table-item__id"
      >
        <Typography
          variant="subtitle-s2"
        >
          {id}
        </Typography>
      </td>
      <td
        className="table-item__name"
      >
        <Typography
          variant="subtitle-s2"
        >
          {name}
        </Typography>
        <Typography
          variant="caption-c2"
          type="light"
          color="#687182"
        >
          {subId}
        </Typography>
      </td>
      <td
        className="table-item__description"
      >
        <Typography
          variant="body-b2"
          type="light"
          color="#464F60"
        >
          {description}
        </Typography>
      </td>
      <td
        className="table-item__status"
      >
        <Tag
          type={status}
        />
      </td>
      <td
        className="table-item__rate"
      >
        <Typography
          variant="body-number"
        >
          {gender}
        </Typography>
      </td>
      <td
        className="table-item__balance"
      >
        <Typography
          variant="body-number"
        >
          {location}
        </Typography>
      </td>
      <td
        className="table-item__deposit"
      >
        <Typography
          variant="body-number"
        >
          {species}
        </Typography>
      </td>
    </tr>
  );
};
