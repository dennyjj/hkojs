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
