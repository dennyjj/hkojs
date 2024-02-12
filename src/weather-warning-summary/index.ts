import { DataType, Lang } from '../enums';
import { callHkoApi } from '../hko-api/api';
import { WeatherWarningSummary } from './types';

/**
 * get weather warning summary
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the weather warning summary data
 */
export async function getWeatherWarningSummary(lang?: Lang): Promise<WeatherWarningSummary> {
  return await callHkoApi(DataType.WARN_SUM, lang ?? Lang.EN);
}
