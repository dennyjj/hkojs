import { WarningStatementCode } from '../constants';

/** weather warning summary data return by the API */
export type WeatherWarningSummary = {
  [key in WarningStatementCode]?: {
    /** warning name */
    name: string;
    /** warning code */
    code: string;
    /** action code */
    actionCode: 'ISSUE' | 'REISSUE' | 'CANCEL' | 'EXTEND' | 'UPDATE';
    /** issue time */
    issueTime: string;
    /** update time */
    updateTime: string;
    /** expire time */
    expireTime?: string;
  };
};
