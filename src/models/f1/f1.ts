export class F1 {
    MRData: MRData;
}

export interface MRData {
    xmlns:       string;
    series:      string;
    url:         string;
    limit:       string;
    offset:      string;
    total:       string;
    DriverTable: DriverTable;
}

export interface DriverTable {
    Drivers: Driver[];
}

export interface Driver {
    driverId:         string;
    url:              string;
    givenName:        string;
    familyName:       string;
    dateOfBirth:      Date;
    nationality:      string;
    permanentNumber?: string;
    code?:            string;
}