import { DataType, Lang } from '../enums';
import { callHkoApi } from '../hko-api/api';
import { WeatherWarningInformation } from './types';

/**
 * get weather warning information
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the weather warning information data
 */
export async function getWeatherWarningInfo(lang?: Lang): Promise<WeatherWarningInformation> {
  return callHkoApi(DataType.WARNING_INFO, lang ?? Lang.EN);
}
