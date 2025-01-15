import { Exo } from "../models/exercise/exercise";
import { IExerciseRepository } from "../repositories/exercise/exerciserepository";
import { ParsedUrlQuery } from 'querystring';



export class ExerciseService {
    private exerciseRepo: IExerciseRepository;

    constructor(exerciseRepository: IExerciseRepository) {
        this.exerciseRepo = exerciseRepository;
    }

    async getExercise(): Promise<Exo> {
        return await this.exerciseRepo.getExercise();
    }

    async getSpecificExercise(queryParam?: ParsedUrlQuery): Promise<Exo> {

        return await this.exerciseRepo.getSpecificExercise(queryParam);
    }
};