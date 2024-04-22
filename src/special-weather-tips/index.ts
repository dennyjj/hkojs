import { DataType, Lang } from '../constants';
import { callHkoApi } from '../hko-api/api';

/**
 * get special weather tips
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the special weather tips data
 */
export async function getSpecialWeatherTips(lang?: Lang): Promise<SpecialWeatherTips> {
  return await callHkoApi(DataType.SWT, lang ?? Lang.EN);
}

export type SpecialWeatherTips = {
  swt: {
    /** tips content */
    desc: string;
    /** update time */
    updateTime: Date;
  }[];
};
