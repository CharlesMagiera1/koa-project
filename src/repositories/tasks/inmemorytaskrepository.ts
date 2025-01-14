import axios from "axios";
import { Task } from "../../models/tasks/task";
import { ITaskRepository } from "./taskrepository";
import { F1 } from "../../models/f1/f1";

export class InMemoryTaskRepository implements ITaskRepository {

    private _task: Task[] = [];
    private _nextId = 1;
    private _received: any;

        async getAll(): Promise<Task[]> {
            console.log('Second - returned getAll from InMemoryRepository class')
            return this._task;
        }

        async get(taskId: number): Promise<Task> {
            const task = this._task.find(t => t.id === taskId);
            return task;
        }

        async create(task: Task): Promise<Task> {
            task.id = this._nextId;
            this._nextId++;
            this._task.push(task);

            return task;
        }

        async update(taskId: number, task: Task): Promise<Task> {
            let updatedTask = this._task.filter(t => t.id === taskId)[0];
            updatedTask.name = task.name;
            updatedTask.id = task.id;
            updatedTask.isComplete = task.isComplete;
            return updatedTask;
        }
         
        async delete(taskId: number): Promise<Task> {
            const index = this._task.findIndex(t => t.id === taskId);
            const task = this._task[index];
            this._task.splice(index, 1);

            return task;
        }
}