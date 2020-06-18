export interface Temperatura {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    IsDayTime: boolean;
    MobileLink: string;
    Link: string;
    Temperature: Item;
}

export interface Item {
    Metric: ValuesTemperature;
    Imperial: ValuesTemperature;
}

export interface ValuesTemperature {
    Value: number;
    Unit: string;
    UnitType: number;
}