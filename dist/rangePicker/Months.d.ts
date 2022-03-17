import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

import {
  RangePickerComponents,
  RangePickerOnChange,
  RangePickerSelectedDays,
} from "./rangePicker.type";

interface Props {
  source: Dayjs;
  jalali: boolean;
  startOfWeek: number;
  hoverDay?: string;
  numberOfMonths: number;
  selectedDays?: RangePickerSelectedDays;
  disabledDays: string[];
  disabledBeforeToday: boolean;
  disabledBeforeDate?: string;
  disabledAfterDate?: string;
  disabled: boolean;
  allowDisabledDaysSpan: boolean;
  components?: RangePickerComponents;
  onChange: RangePickerOnChange;
  setSource: Dispatch<SetStateAction<Dayjs>>;
  setHoverDay: Dispatch<SetStateAction<string | undefined>>;
  setSelectedDays: Dispatch<
    SetStateAction<RangePickerSelectedDays | undefined>
  >;
}
export declare const Months: ({
  allowDisabledDaysSpan,
  numberOfMonths,
  startOfWeek,
  selectedDays,
  disabledDays,
  hoverDay,
  setHoverDay,
  components,
  setSelectedDays,
  disabledBeforeToday,
  disabledBeforeDate,
  disabledAfterDate,
  jalali,
  disabled,
  onChange,
  source: sourceProp,
}: Props) => JSX.Element;
export {};
