import { DataType, Lang } from '../enum/enum';
import { callHkoApi } from '../hkoApi/api';

/**
 * weather warning summary API
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the weather warning summary data
 */
export async function getWeatherWarningSummary(
  lang?: Lang
): Promise<WeatherWarningSummary> {
  return await callHkoApi(DataType.WARN_SUM, lang ?? Lang.EN);
}

/**
 * weather warning summary data return by the API.
 */
export type WeatherWarningSummary = {
  [key in WarningStatementCode]: {
    // TODO doc
    name: string;
    code: string;
    actionCode: string;
    issueTime: string;
    updateTime: string;
    expireTime?: string;
  };
};

enum WarningStatementCode {
  /** fire danger warning */
  WFIRE = 'WFIRE',
  /** frost warning */
  WFROST = 'WFROST',
  /** hot weather warning */
  WHOT = 'WHOT',
  /** cold weather warning */
  WCOLD = 'WCOLD',
  /** strong monsoon warning */
  WMSGNL = 'WMSGNL',
  /** rainstorm warning */
  WRAIN = 'WRAIN',
  /** special Announcement on flooding in the northern New Territories */
  WFNTSA = 'WFNTSA',
  /** landslip warning */
  WL = 'WL',
  /** tropical cyclone warning */
  WTCSGNL = 'WTCSGNL',
  /** tsunami warning */
  WTMW = 'WTMW',
  /** thunderstorm warning */
  WTS = 'WTS', // Thunderstorm Warning
}
