import { WarningStatementCode } from '../constants';

/** weather warning summary */
export type WeatherWarningSummary = {
  [key in WarningStatementCode]?: {
    /** warning name */
    name: string;
    /** warning code */
    code: string;
    /** action code */
    actionCode: ActionCode;
    /** issue time */
    issueTime: string;
    /** update time */
    updateTime: string;
    /** expire time */
    expireTime?: string;
  };
};

export enum ActionCode {
  ISSUE = 'ISSUE',
  REISSUE = 'REISSUE',
  CANCEL = 'CANCEL',
  EXTEND = 'EXTEND',
  UPDATE = 'UPDATE',
}
