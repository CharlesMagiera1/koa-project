import { F1 } from "../models/f1/f1";
import { Circuit, F1year } from "../models/f1/f1year";
import { If1Repositorty } from "../repositories/f1/f1repository";


export class F1Service {
    private f1Repo: If1Repositorty;

    constructor(f1Repository: If1Repositorty) {
        this.f1Repo = f1Repository;
    }

    async getF1(): Promise<F1> {
        console.log("First - Getting all tasks from TaskService");
        return this.f1Repo.getF1();
    }

    async getF1YearCircuits(year: number): Promise<F1year> {

        return await this.f1Repo.getF1YearCircuits(year);
    }

    async getF1Year(year: number): Promise<F1year> {

        return await this.f1Repo.getF1Year(year);
    }

    async getF1Season(year: number, season: number): Promise<F1year> {

        return await this.f1Repo.getF1Season(year, season);
    }
    
    async getF1Drivers(year: number, season: number): Promise<F1> {

        return await this.f1Repo.getF1Drivers(year, season);
    }

};