import { DataType, Lang } from '../constants';
import { callHkoApi } from '../hko-api/api';
import { HkoLocalWeatherForecast, GetLocalWeatherForecastResponse, toGetLocalWeatherForecastResponse } from './types';

/**
 * get local weather forecast
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the local weather forecast data
 */
export async function getLocalWeatherForecast(lang?: Lang): Promise<GetLocalWeatherForecastResponse> {
  const data = await callHkoApi<HkoLocalWeatherForecast>(DataType.FLW, lang ?? Lang.EN);
  return toGetLocalWeatherForecastResponse(data);
}
