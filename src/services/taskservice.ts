import { F1 } from "../models/f1/f1";
import { Task } from "../models/tasks/task";
import { ITaskRepository } from "../repositories/tasks/taskrepository";

export class TaskService {
    private taskRepo: ITaskRepository;

    constructor(taskRepository: ITaskRepository) {
        this.taskRepo = taskRepository;
    }

      async getAllTasks(): Promise<Task[]> {
        console.log("First - Getting all tasks from TaskService");
        return this.taskRepo.getAll();
    }

    async getTask(id: number): Promise<Task> {
        console.log("Getting task with id " + id);
        return await this.taskRepo.get(id);
    }

    async createTask(task: Task): Promise<Task> {
        console.log("Creating task with name " + task.name);
        return await this.taskRepo.create(task);
    }

    async updateTask(id: number, task: Task): Promise<Task> {
        console.log("Update task with id " + id);
        return await this.taskRepo.update(id, task);
    }

    async deleteTask(id: number): Promise<Task> {
        console.log("Deleting task with id " + id);
        return await this.taskRepo.delete(id);
    }
}