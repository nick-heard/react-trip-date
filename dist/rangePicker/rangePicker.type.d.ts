import { InitialComponents, InitialProps } from "constant";

export declare type RangePickerOnChange = (
  selectedDays: RangePickerSelectedDays,
) => void;
export declare type RangePickerSelectedDays = {
  from: string;
  to: string;
};
export interface RangePickerComponents extends InitialComponents {}
export interface RangePickerProps extends InitialProps {
  components?: RangePickerComponents;
  selectedDays?: RangePickerSelectedDays;
  onChange: RangePickerOnChange;
  allowDisabledDaysSpan?: boolean;
}
