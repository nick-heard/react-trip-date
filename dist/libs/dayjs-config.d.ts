import _dayjs from "dayjs";

declare const dayjs: (
  date?: _dayjs.ConfigType,
  format?:
    | string
    | {
        locale?: string;
        format?: string;
        utc?: boolean;
        jalali?: boolean;
      }
    | string[],
  strict?: boolean,
) => _dayjs.Dayjs;
export { dayjs };
