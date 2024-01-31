import { DataType, Lang } from '../enum/enum';
import { callHkoApi } from '../hkoApi/api';

export async function getWeatherWarningSummary(
  lang?: Lang
): Promise<WeatherWarningSummary> {
  return await callHkoApi(DataType.WARN_SUM, lang ?? Lang.EN);
}

export type WeatherWarningSummary = {
  [key in WarningStatementCode]: {
    name: string;
    code: string;
    actionCode: string;
    issueTime: string;
    updateTime: string;
    expireTime?: string;
  };
};

enum WarningStatementCode {
  WFIRE = 'WFIRE', // Fire Danger Warning
  WFROST = 'WFROST', // Frost Warning
  WHOT = 'WHOT', // Hot Weather Warning
  WCOLD = 'WCOLD', // Cold Weather Warning
  WMSGNL = 'WMSGNL', // Strong Monsoon Signal
  WRAIN = 'WRAIN', // Rainstorm Warning Signal
  WFNTSA = 'WFNTSA', // Special Announcement on Flooding in the northern New Territories
  WL = 'WL', // Landslip Warning
  WTCSGNL = 'WTCSGNL', // Tropical Cyclone Warning Signal
  WTMW = 'WTMW', // Tsunami Warning
  WTS = 'WTS', // Thunderstorm Warning
}
