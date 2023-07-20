import { Checkbox } from "@shared/ui/atoms/checkbox";
import { SortingIcon } from "@shared/ui/atoms/icons";
import { Typography } from "@shared/ui/atoms/typography";

import './index.scss'

export type TTableHeader = {
  onName?: () => void,
  isName?: boolean | null,
}

export const TableHeader = ({ onName, isName }: TTableHeader) => {
  return (
    <tr className="header">
      <th
        className="header__checkbox"
      >
        <Checkbox
          checked={false}
        />
      </th>
      <th
        className="header__id"
      >
        <Typography
          variant="overline"
          type="bold"
        >
          #
        </Typography>
        <SortingIcon
          active="up"
        />
      </th>
      <th
        className="header__name"
        onClick={onName}
      >
        <Typography
          variant="overline"
          type="bold"
        >
          name
        </Typography>
        <SortingIcon
          active={isName !== null
            ? isName ? 'up' : 'down'
            : 'none'
          }
        />
      </th>
      <th
        className="header__description"
      >
        <Typography
          variant="overline"
          type="bold"
        >
          description
        </Typography>
      </th>
      <th
        className="header__status"
      >
        <Typography
          variant="overline"
          type="bold"
        >
          status
        </Typography>
      </th>
      <th
        className="header__rate"
      >
        <Typography
          variant="overline"
          type="bold"
        >
          gender
        </Typography>
      </th>
      <th
        className="header__balance"
      >
        <Typography
          variant="overline"
          type="bold"
        >
          location
        </Typography>
      </th>
      <th
        className="header__deposit"
      >
        <Typography
          variant="overline"
          type="bold"
        >
          species
        </Typography>
      </th>
    </tr>
  );
};
