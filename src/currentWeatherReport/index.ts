import { DataType, Lang } from '../enum/enum';
import { callHkoApi } from '../hkoApi/api';

export async function getCurrentWeatherReport(
  lang?: Lang
): Promise<CurrentWeatherReport> {
  return await callHkoApi(DataType.RHRREAD, lang ?? Lang.EN);
}

export interface CurrentWeatherReport {
  lightning?: {
    data: {
      place: string;
      occur: boolean;
    }[];
    startTime: string;
    endTime: string;
  };
  rainfall: {
    data: {
      unit: string;
      place: string;
      main: boolean;
      max?: number;
      min?: number;
    }[];
    startTime: string;
    endTime: string;
  };
  icon: string[];
  iconUpdateTime: string;
  uvindex: {
    data: {
      place: string;
      value: string;
      desc: string;
      message?: string;
    }[];
    recordDesc: string;
  };
  updateTime: string;
  warningMessage: string[];
  rainstormReminder?: string;
  specialWxTips?: string[];
  tcmessage?: string[];
  mintempFrom00To09?: string;
  rainfallFrom00To12?: string;
  rainfallLastMonth?: string;
  rainfallJanuaryToLastMonth?: string;
  temperature: {
    data: {
      place: string;
      value: string;
      unit: string;
    }[];
    recordTime: string;
  };
  humidity: {
    data: {
      place: string;
      value: string;
      unit: string;
    }[];
    recordTime: string;
  };
}
