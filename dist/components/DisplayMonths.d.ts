import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";
declare type Props = {
  source: Dayjs;
  jalali: boolean;
  setSource: Dispatch<SetStateAction<Dayjs>>;
  setDisplayMonths: Dispatch<SetStateAction<boolean>>;
};
export declare const DisplayMonths: ({
  source,
  setSource,
  setDisplayMonths,
  jalali,
}: Props) => JSX.Element;
export {};
