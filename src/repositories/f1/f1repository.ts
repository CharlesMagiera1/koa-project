import { F1 } from "../../models/f1/f1";
import { Circuit, F1year } from "../../models/f1/f1year";

export interface If1Repositorty {
    getF1(): Promise<F1>;
    getF1Year(year: number): Promise<F1year>;
    getF1YearCircuits(year: number): Promise<F1year>;
    getF1Season(f1year: number, f1season: number): Promise<F1year>;
    getF1Drivers(f1year: number, f1season: number): Promise<F1>;
};