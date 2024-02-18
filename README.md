# hkojs

A Hong Kong Observatory API Wrapper

---

### Get started

`npm i hkojs`

---

#### Dataset

- 9-day Weather Forecast
- Current Weather Report
- Local Weather Forecast
- Weather Warning Information
- Weather Warning Summary
- Special Weather Tips

---

#### Example

```typescript
import { Lang, getLocalWeatherForecast } from 'hkojs';

(async () => {
  const forecast = await getLocalWeatherForecast(Lang.EN);
  console.log(forecast);
})();

/* Response
{
  generalSituation: 'A maritime airstream is affecting the coastal areas of Guangdong.',
  forecastPeriod: 'Weather forecast for tonight and tomorrow',
  forecastDescription: 'Mainly cloudy. Foggy with one or two light rain patches in the morning and at night. Sunny intervals during the day tomorrow. Temperatures will range between 20 and 24 degrees. Light to moderate southeasterly winds.',
  outlook: 'Still humid and foggy in the following couple of days. Rather warm during the day. Temperatures will fall in the latter part of this week.',
  updateTime: '2024-02-18T18:45:00+08:00'
}
*/
```
