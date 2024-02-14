export interface PlaceValue {
  /** place */
  place: string;
  /** value */
  value: string;
}

export interface StartEndTime {
  /** start time */
  startTime: Date;
  /** end time */
  endTime: Date;
}

export interface LightningData extends StartEndTime {
  data: {
    /** place */
    place: string;
    /** occur */
    occur: true;
  };
}

export interface RainfallData extends StartEndTime {
  data: {
    /** unit */
    unit: string;
    /** place */
    place: string;
    /** maintenance flag */
    main: 'TRUE' | 'FALSE';
    /** maximum rainfall record */
    max?: string;
    /** maximum rainfall record */
    min?: string;
  };
}

export interface UvIndexData {
  data: PlaceValue & {
    /** description */
    desc: string;
    /** message */
    message?: string;
  };
  /** record description */
  recordDesc: string;
}

export interface TemperatureHumidityData extends PlaceValue {
  data: PlaceValue & {
    /** unit */
    unit: string;
  };
  /** record time */
  recordTime: Date;
}

export interface CurrentWeatherReport {
  /** lightning */
  lightning?: LightningData[];
  /** rainfall */
  rainfall: RainfallData[];
  /** icon */
  icon: string[];
  /** icon update time */
  iconUpdateTime: string;
  /** uv index */
  uvindex: UvIndexData[];
  /** update time */
  updateTime: string;
  /** warning message */
  warningMessage: string[];
  /** rainstorm reminder */
  rainstormReminder?: string;
  /** special weather tips */
  specialWxTips?: string[];
  /** message of tropical cyclone position */
  tcmessage?: string[];
  /** minimum temperature from midnight to 9 am */
  mintempFrom00To09?: string;
  /** accumulated rainfall at HKO from midnight to noon */
  rainfallFrom00To12?: string;
  /** rainfall in last month */
  rainfallLastMonth?: string;
  /** accumulated rainfall from January to last month */
  rainfallJanuaryToLastMonth?: string;
  /** temperature */
  temperature: TemperatureHumidityData[];
  /** humidity */
  humidity: TemperatureHumidityData[];
}
