import axios from "axios";
import { Exo } from "../../models/exercise/exercise";
import { IExerciseRepository } from "./exerciserepository";
import * as dotenv from 'dotenv';

dotenv.config();

export class InMemoryExerciseRepository implements IExerciseRepository {

    private _received: any;
    private BASEURL: string = 'https://api.api-ninjas.com/v1/exercises';
    private apiKey = process.env.API_KEY_EXERCISE

    async getExercise(): Promise<any> {
        const response = await axios.get(this.BASEURL, {
            headers: {'X-Api-Key':this.apiKey},
            params: {
                'type': 'powerlifting',
            },
        });

        return response.data;
    }   
}