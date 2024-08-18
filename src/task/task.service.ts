import { Injectable } from '@nestjs/common';
import { TaskDto } from "./task.dto";

@Injectable()
export class TaskService {
  private tasks = [];
  create(task:TaskDto){
    this.tasks.push(task);
    console.log(this.tasks);
  }
}
