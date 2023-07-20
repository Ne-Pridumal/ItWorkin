import { Typography } from "@shared/ui/atoms/typography";

import './index.scss'

export type TSelector = {
  items: string[],
  onItem?: (e: string) => void,
  activeItem: string,
}

export const Selector = ({
  items,
  onItem,
  activeItem,
}: TSelector) => {
  const activeIndex = items.findIndex(i => i === activeItem)
  return (
    <div className="selector">
      {items.map((item, index) => (
        <div
          className={`selector__item ${index === activeIndex && 'selector__item_active'}`}
          onClick={() => onItem?.(item)}
          key={index}
        >
          <Typography
            variant="subtitle-s2"
          >
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
};
