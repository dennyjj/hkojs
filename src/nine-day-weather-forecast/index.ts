import { DataType, Lang } from '../enums';
import { callHkoApi } from '../hko-api/api';
import { NineDayWeatherForecast } from './types';

/**
 * get 9-day weather forecast
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the local weather forecast data
 */
export async function getNineDayWeatherForecast(lang?: Lang): Promise<NineDayWeatherForecast> {
  return callHkoApi(DataType.FND, lang ?? Lang.EN);
}
