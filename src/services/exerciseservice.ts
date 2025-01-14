import { Exo } from "../models/exercise/exercise";
import { IExerciseRepository } from "../repositories/exercise/exerciserepository";



export class ExerciseService {
    private exerciseRepo: IExerciseRepository;

    constructor(exerciseRepository: IExerciseRepository) {
        this.exerciseRepo = exerciseRepository;
    }

    async getExercise(): Promise<Exo> {
        return this.exerciseRepo.getExercise();
    }
};