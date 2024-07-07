import { DataType, Lang } from '../constants';
import { callHkoApi } from '../hko-api/api';
import { SpecialWeatherTips } from './types';

/**
 * get special weather tips
 *
 * @param lang - language to use for the API response
 * @returns promise that resolves to the special weather tips data
 */
export async function getSpecialWeatherTips(lang?: Lang): Promise<SpecialWeatherTips> {
  return callHkoApi(DataType.SWT, lang ?? Lang.EN);
}
