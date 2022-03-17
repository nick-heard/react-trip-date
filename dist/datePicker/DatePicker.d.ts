/// <reference types="react" />
import { DatePickerProps } from "./datePicker.type";
export declare const DatePicker: ({
  jalali,
  disabled,
  autoResponsive,
  startOfWeek,
  numberOfMonths: numberOfMonthsProps,
  disabledDays,
  components,
  theme: themeProps,
  numberOfSelectableDays,
  disabledBeforeToday,
  disabledBeforeDate,
  disabledAfterDate,
  selectedDays: selectedDaysProps,
  onChange,
  initialMonthAndYear,
  onRangeDateInScreen,
}: DatePickerProps) => JSX.Element;
