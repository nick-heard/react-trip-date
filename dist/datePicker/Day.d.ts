import { Dayjs } from "dayjs";
import { Dispatch, SetStateAction } from "react";

import { DatePickerComponents, DatePickerOnChange } from "./datePicker.type";
declare type Props = {
  day: Dayjs;
  source: Dayjs;
  jalali: boolean;
  disabled: boolean;
  numberOfMonth: number;
  selectedDays: string[];
  disabledDays: string[];
  numberOfSelectableDays: number;
  disabledBeforeToday: boolean;
  disabledBeforeDate?: string;
  disabledAfterDate?: string;
  components?: DatePickerComponents;
  onChange: DatePickerOnChange;
  setSelectedDays: Dispatch<SetStateAction<string[]>>;
};
export declare const Day: React.FC<Props>;
export {};
