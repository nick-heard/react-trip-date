import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";
import { InitialComponents } from "constant";
declare type Props = {
  displayMonths: boolean;
  jalali: boolean;
  numberOfMonths: number;
  source: Dayjs;
  components?: InitialComponents;
  setDisplayMonths: Dispatch<SetStateAction<boolean>>;
  setSource: Dispatch<SetStateAction<Dayjs>>;
};
export declare const Header: ({
  jalali,
  source,
  setSource,
  components,
  displayMonths,
  numberOfMonths,
  setDisplayMonths,
}: Props) => JSX.Element;
export {};
