/**
 * local weather forecast data return by HKO
 */
export interface HkoLocalWeatherForecast {
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

/**
 * get local weather forecast response
 */
export interface GetLocalWeatherForecastResponse {
  /** general situation */
  generalSituation: string;
  /** tropical cyclone information */
  tropicalCycloneInfo?: string;
  /** fire danger warning message */
  fireDangerWarning?: string;
  /** forecast period */
  forecastPeriod: string;
  /** forecast description */
  forecastDescription: string;
  /** outlook */
  outlook: string;
  /** update time */
  updateTime: string;
}

export function toGetLocalWeatherForecastResponse(data: HkoLocalWeatherForecast): GetLocalWeatherForecastResponse {
  const { generalSituation, tcInfo, fireDangerWarning, forecastPeriod, forecastDesc, outlook, updateTime } = data;

  const response: GetLocalWeatherForecastResponse = {
    generalSituation,
    forecastPeriod,
    outlook,
    updateTime,
    forecastDescription: forecastDesc,
  };

  if (tcInfo) response.tropicalCycloneInfo = tcInfo;
  if (fireDangerWarning) response.fireDangerWarning = fireDangerWarning;

  return response;
}
