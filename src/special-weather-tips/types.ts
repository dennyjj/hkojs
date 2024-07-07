/**
 * special weather tips
 */
export interface SpecialWeatherTips {
  swt: {
    /** tips content */
    desc: string;
    /** update time */
    updateTime: Date;
  }[];
}
