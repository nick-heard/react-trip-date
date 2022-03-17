import { Dayjs } from "dayjs";

declare const createCalendar: ({
  source,
  startOfWeek,
}: CreateCalendarType) => Dayjs[];
export { createCalendar };
interface CreateCalendarType {
  source: Dayjs;
  startOfWeek: number;
}
