import { DataType, Lang, WarningStatementCode } from '../enums';
import { callHkoApi } from '../hko-api/api';

/**
 * get weather warning summary
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the weather warning summary data
 */
export async function getWeatherWarningSummary(
  lang?: Lang
): Promise<WeatherWarningSummary> {
  return await callHkoApi(DataType.WARN_SUM, lang ?? Lang.EN);
}

/** weather warning summary data return by the API */
export type WeatherWarningSummary = {
  [key in WarningStatementCode]?: {
    /** warning name */
    name: string;
    /** warning code */
    code: string;
    /** action code */
    actionCode: string;
    /** issue time */
    issueTime: string;
    /** update time */
    updateTime: string;
    /** expire time */
    expireTime?: string;
  };
};
