import { Typography } from "@shared/ui/atoms/typography";

import './index.scss'

export type TTag = {
  type: 'Alive' | 'Dead' | 'unknown'
}

export const Tag = ({ type }: TTag) => {
  return (
    <div
      className={`tag tag_${type}`}
    >
      <Typography
        variant="caption-c1"
      >
        {type}
      </Typography>
    </div>
  );
};
