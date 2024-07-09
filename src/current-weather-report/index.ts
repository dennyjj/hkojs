import { DataType, Lang } from '../enums';
import { callHkoApi } from '../hko-api/api';
import { CurrentWeatherReport } from './types';

/**
 * get current weather report
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the current weather report data
 */
export async function getCurrentWeatherReport(lang?: Lang): Promise<CurrentWeatherReport> {
  return callHkoApi(DataType.RHRREAD, lang ?? Lang.EN);
}
