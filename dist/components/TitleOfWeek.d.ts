import { ElementType } from "react";
declare type Props = {
  jalali: boolean;
  startOfWeek: number;
  components?: {
    titles?: string[];
    wrapper?: ElementType<{
      jalali: boolean;
      startOfWeek: number;
    }>;
  };
};
export declare const TitleOfWeek: React.FunctionComponent<Props>;
export {};
