import { Exo } from "../../models/exercise/exercise";
import { ParsedUrlQuery } from 'querystring';



export interface IExerciseRepository {
    getExercise(): Promise<Exo>;
    getSpecificExercise(queryParam?: ParsedUrlQuery): Promise<Exo>;
};