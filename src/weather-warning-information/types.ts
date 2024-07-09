import { WarningStatementCode } from '../enums/warningStatementCode';

/** weather warning information */
export interface WeatherWarningInformation {
  details?: {
    /** list of contents */
    contents: string[];
    /** warning statement code */
    warningStatementCode: WarningStatementCode;
    /** sub-type of the waring */
    subType: string; // TODO: add type
    /** update time */
    updateTime: Date;
  }[];
}
