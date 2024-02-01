import { DataType, Lang } from '../enum/enum';

/**
 * HKO base API
 *
 * @param dataType - type of data to retrieve from the API
 * @param lang - language to use for the API response
 * @returns promise that resolves to the HKO data
 */
export async function callHkoApi(dataType: DataType, lang: Lang): Promise<any> {
  const baseApiUrl =
    'https://data.weather.gov.hk/weatherAPI/opendata/weather.php';

  const resp = await fetch(`${baseApiUrl}?dataType=${dataType}&lang=${lang}`);

  return await resp.json();
}
