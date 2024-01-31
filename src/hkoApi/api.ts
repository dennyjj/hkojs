import { DataType, Lang } from '../enum/enum';

export async function callHkoApi(dataType: DataType, lang: Lang) {
  const baseApiUrl =
    'https://data.weather.gov.hk/weatherAPI/opendata/weather.php';

  const resp = await fetch(`${baseApiUrl}?dataType=${dataType}&lang=${lang}}`);

  return await resp.json();
}
