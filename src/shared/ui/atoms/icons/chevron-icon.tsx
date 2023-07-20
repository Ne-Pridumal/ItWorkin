import { TDirectedIconsProps } from "./types";

export const ChevronIcon = ({ color, width = 16, height = 16, direction }: TDirectedIconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={
        direction === 'up' ?
          "rotate(90)"
          :
          direction === "down" ?
            "rotate(270)"
            :
            direction === "left" ?
              "rotate(0)"
              :
              "rotate(180)"
      }>
      <path d="M9.5 11L6.5 8L9.5 5" stroke={color ?? "#464F60"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
