import { DataType, Lang } from '../enum/enum';
import { callHkoApi } from '../hkoApi/api';

/**
 * local weather forecast API
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the local weather forecast data
 */
export async function getLocalWeatherForecast(
  lang?: Lang
): Promise<localWeatherForecast> {
  return await callHkoApi(DataType.FLW, lang ?? Lang.EN);
}

/**
 * local weather forecast data returned by the API.
 */
export interface localWeatherForecast {
  /** general weather situation */
  generalSituation: string;
  /** tropical cyclone information */
  tcInfo: string;
  /** fire danger warning */
  fireDangerWarning: string;
  /** forecast period */
  forecastPeriod: string;
  /** forecast description */
  forecastDesc: string;
  /** weather outlook */
  outlook: string;
  /** last update time */
  updateTime: string;
}
