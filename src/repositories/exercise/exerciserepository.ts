import { Exo } from "../../models/exercise/exercise";


export interface IExerciseRepository {
    getExercise(): Promise<Exo>;
};