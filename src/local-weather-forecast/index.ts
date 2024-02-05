import { DataType, Lang } from '../enums';
import { callHkoApi } from '../hko-api/api';

/**
 * get local weather forecast
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
 * local weather forecast data return by the API.
 */
export interface localWeatherForecast {
  /** general situation */
  generalSituation: string;
  /** tropical cyclone information */
  tcInfo: string;
  /** fire danger warning message */
  fireDangerWarning: string;
  /** forecast period */
  forecastPeriod: string;
  /** forecast description */
  forecastDesc: string;
  /** outlook */
  outlook: string;
  /** update time */
  updateTime: string;
}
