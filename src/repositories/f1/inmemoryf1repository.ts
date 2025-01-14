import axios from "axios";
import { Driver, F1, MRData } from "../../models/f1/f1";
import { If1Repositorty } from "./f1repository";
import { Circuit, F1year } from "../../models/f1/f1year";


export class InMemoryF1Repository implements If1Repositorty {
    
    private _received: any;
    private BASEURL: string = 'https://api.jolpi.ca/ergast/f1/';

    async getF1(): Promise<F1> {
        const response = await axios.get(this.BASEURL + 'drivers.json?');
        this._received = response.data;
        console.log('F1 Data: ', this._received);

        return this._received;
    }

    async getF1Year(f1year: number): Promise<F1year> {
        const response = await axios.get(this.BASEURL + f1year + '.json');

        return response.data;
    }

    async getF1YearCircuits(f1year: number): Promise<F1year> {
        const response = await axios.get(this.BASEURL + f1year + '.json');

        const circuitNames = response.data.MRData.RaceTable.Races.map((race: { Circuit: { circuitName: string } }) => race.Circuit.circuitName);

        return circuitNames;
    }

    async getF1Season(f1year: number, f1season:number): Promise<F1year> {
        const response = await axios.get(this.BASEURL + f1year + '/' + f1season + '.json');
        this._received = response.data;
        console.log('F1 season result: ', response.data);

        return response.data;
    }

    async getF1Drivers(f1year: number, f1season: number): Promise<F1> {
        const response = await axios.get(this.BASEURL + f1year + '/' + f1season + '/drivers.json')

        const driversName = response.data.MRData.DriverTable.Drivers.map((drivers: { familyName: F1, givenName: F1 }) => ({
            familyName: drivers.familyName,
            givenName: drivers.givenName,
    }));

        return driversName;
    }
}