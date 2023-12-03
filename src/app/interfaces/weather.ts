import { iTemperature } from "./temperature";

export interface iWeather {
    city_name: string;
    visit_from: string;
    visit_to: string;
    temperatures: iTemperature[];
}
