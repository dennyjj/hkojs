import { DataType, Lang } from '../enums';
import { callHkoApi } from '../hko-api/api';
import { HkoLocalWeatherForecast, GetLocalWeatherForecastResponse } from './types';

/**
 * get local weather forecast
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the local weather forecast data
 */
export async function getLocalWeatherForecast(lang?: Lang): Promise<GetLocalWeatherForecastResponse> {
  const { generalSituation, tcInfo, fireDangerWarning, forecastPeriod, forecastDesc, outlook, updateTime } =
    await callHkoApi<HkoLocalWeatherForecast>(DataType.FLW, lang ?? Lang.EN);

  const resp: GetLocalWeatherForecastResponse = {
    generalSituation,
    forecastPeriod,
    forecastDescription: forecastDesc,
    outlook,
    updateTime,
  };

  if (tcInfo) resp.tropicalCycloneInfo = tcInfo;
  if (fireDangerWarning) resp.fireDangerWarning = fireDangerWarning;

  return resp;
}
