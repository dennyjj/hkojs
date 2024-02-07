import { DataType, Lang, WarningStatementCode } from '../enums';
import { callHkoApi } from '../hko-api/api';

/**
 * get weather warning information
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the weather warning information data
 */
export async function getWeatherWarningInfo(lang?: Lang): Promise<any> {
  return await callHkoApi(DataType.WARNING_INFO, lang ?? Lang.EN);
}

/** weather warning information data return by the API */
export type WeatherWarningInformation = {
  details: {
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
