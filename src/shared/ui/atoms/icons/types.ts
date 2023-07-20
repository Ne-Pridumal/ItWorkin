export type TDefaultIconsProps = {
  width?: number,
  height?: number,
  color?: string,
}
export type TDirectedIconsProps = TDefaultIconsProps & {
  direction: 'up' | 'left' | 'right' | 'down'
}
