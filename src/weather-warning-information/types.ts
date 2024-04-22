import { WarningStatementCode } from '../constants';

/** get weather warning information response */
export type GetWeatherWarningInformationResponse = {
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
};
