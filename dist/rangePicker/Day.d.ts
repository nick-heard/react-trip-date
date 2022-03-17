import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

import {
  RangePickerComponents,
  RangePickerOnChange,
  RangePickerSelectedDays,
} from "./rangePicker.type";

interface Props {
  day: Dayjs;
  source: Dayjs;
  jalali: boolean;
  hoverDay?: string;
  disabled: boolean;
  numberOfMonth: number;
  disabledDays: string[];
  disabledBeforeToday: boolean;
  disabledBeforeDate?: string;
  disabledAfterDate?: string;
  allowDisabledDaysSpan: boolean;
  components?: RangePickerComponents;
  onChange: RangePickerOnChange;
  selectedDays?: RangePickerSelectedDays;
  setHoverDay: Dispatch<SetStateAction<string | undefined>>;
  setSelectedDays: Dispatch<
    SetStateAction<RangePickerSelectedDays | undefined>
  >;
}
export declare const Day: ({
  day,
  source,
  jalali,
  selectedDays,
  disabledDays,
  allowDisabledDaysSpan,
  hoverDay,
  disabled,
  components,
  onChange,
  setHoverDay,
  setSelectedDays,
  numberOfMonth,
  disabledBeforeToday,
  disabledBeforeDate,
  disabledAfterDate,
}: Props) => JSX.Element;
export {};
