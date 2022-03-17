import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

import { DatePickerComponents, DatePickerOnChange } from "./datePicker.type";
interface Props {
  source: Dayjs;
  jalali: boolean;
  disabled: boolean;
  startOfWeek: number;
  numberOfMonths: number;
  selectedDays: string[];
  disabledDays: string[];
  disabledBeforeToday: boolean;
  disabledBeforeDate?: string;
  disabledAfterDate?: string;
  numberOfSelectableDays: number;
  onChange: DatePickerOnChange;
  components?: DatePickerComponents;
  setSource: Dispatch<SetStateAction<Dayjs>>;
  setSelectedDays: Dispatch<SetStateAction<string[]>>;
}
export declare const Months: ({
  numberOfSelectableDays,
  numberOfMonths,
  startOfWeek,
  selectedDays,
  disabledDays,
  setSelectedDays,
  components,
  disabledBeforeToday,
  disabledBeforeDate,
  disabledAfterDate,
  jalali,
  disabled,
  onChange,
  source: sourceProp,
}: Props) => JSX.Element;
export {};
