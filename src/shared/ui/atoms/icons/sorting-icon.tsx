import { TDefaultIconsProps } from "./types";

type TSortingIcon = Omit<TDefaultIconsProps, 'color'> & {
  active?: 'up' | 'down' | 'none'
}

export const SortingIcon = ({ active, width = 16, height = 16 }: TSortingIcon) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
      <path d="M8.40962 13.4148C8.21057 13.6992 7.78943 13.6992 7.59038 13.4148L5.05071 9.78673C4.81874 9.45534 5.05582 9 5.46033 9H10.5397C10.9442 9 11.1813 9.45534 10.9493 9.78673L8.40962 13.4148Z" fill={active === 'down' ? '#171C26' : "#BCC2CE"} />
      <path d="M8.40962 2.58517C8.21057 2.30081 7.78943 2.30081 7.59038 2.58517L5.05071 6.21327C4.81874 6.54466 5.05582 7 5.46033 7H10.5397C10.9442 7 11.1813 6.54466 10.9493 6.21327L8.40962 2.58517Z" fill={active === 'up' ? '#171C26' : "#BCC2CE"} />
    </svg>
  );
};
