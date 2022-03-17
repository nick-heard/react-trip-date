/// <reference types="react" />

import { RangePickerProps } from "./rangePicker.type";

export declare const RangePicker: ({
  jalali,
  startOfWeek,
  numberOfMonths: numberOfMonthsProps,
  disabledDays,
  disabledBeforeToday,
  disabledBeforeDate,
  disabledAfterDate,
  disabled,
  allowDisabledDaysSpan,
  components,
  theme: themeProps,
  autoResponsive,
  selectedDays: selectedDaysProps,
  onChange,
  initialMonthAndYear,
  onRangeDateInScreen,
}: RangePickerProps) => JSX.Element;
