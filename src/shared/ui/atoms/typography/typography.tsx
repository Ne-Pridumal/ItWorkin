import { ReactNode } from 'react';
import './index.scss'

export type TTypography = {
  variant?: TTypographyVariants,
  type?: 'light' | 'medium' | 'bold',
  color?: string,
  children: ReactNode
}

type TTypographyVariants =
  'subtitle-s2' |
  'caption' |
  'caption-c1' |
  'caption-c2' |
  'body-b2' |
  'body-number' |
  'overline'

export const Typography = ({
  type = 'medium',
  color,
  variant = 'subtitle-s2',
  children,
}: TTypography) => {
  return (
    <p
      className={`typography typography_${type} typography_${variant} `}
      style={{ color }}
    >
      {children}
    </p>
  );
};


