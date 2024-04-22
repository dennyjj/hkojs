import { HKO_API_URL } from '../constants';
import { DataType, Lang } from '../constants';

/**
 * call HKO base API
 *
 * @param dataType - type of data to retrieve from the API
 * @param lang - language to use for the API response
 * @returns promise that resolves to the data
 */
export async function callHkoApi<T>(dataType: DataType, lang: Lang): Promise<T> {
  const resp = await fetch(`${HKO_API_URL}?dataType=${dataType}&lang=${lang}`);
  return await resp.json();
}
