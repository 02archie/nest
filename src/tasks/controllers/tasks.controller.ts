import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from "../services/tasks.service";

@Controller('api/tasks')
export class TasksController {

    constructor(
        private taskService: TasksService 
    ){}

    @Get()
    getAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id:number){
        return this.taskService.findOne(id);
    }

    @Post()
    createTask(@Body() body:any){
        return this.taskService.create(body);
    }

    @Put(':id')
    updateTask(@Param('id') id:number, @Body() body:any){
        return this.taskService.update(id, body);
    }

    @Delete(':id')
    deleteTask(@Param('id') id:number){
        return this.taskService.delete(id);
    }

}
