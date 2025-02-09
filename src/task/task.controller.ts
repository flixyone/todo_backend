import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';  // Importamos el servicio de tareas
import { Task } from './task.entity';  // Importamos la entidad Task para las tareas
import { HttpException, HttpStatus } from '@nestjs/common';  // Para lanzar excepciones HTTP

@Controller('tasks')  // La ruta base para este controlador es /tasks
export class TaskController {
  constructor(private readonly taskService: TaskService) {}  // Inyectamos el TaskService para manejar la lógica de negocio

  // Ruta para obtener todas las tareas
  @Get()
  findAll() {
    return this.taskService.findAll();  // Llamamos al servicio para obtener todas las tareas
  }

  // Ruta para crear una nueva tarea
  @Post()
  create(@Body() body: { title: string; description: string }) {
    // Llamamos al servicio para crear una tarea con los datos enviados en el cuerpo de la solicitud
    return this.taskService.create(body.title, body.description);
  }

  // Ruta para actualizar el estado de una tarea
  @Put(':id')  // :id es un parámetro dinámico de la URL que se usará para identificar la tarea
  async update(@Param('id') id: number, @Body() task: Partial<Task>): Promise<Task> {
    try {
      // Llamamos al servicio para actualizar la tarea con el id y los datos enviados
      const updatedTask = await this.taskService.update(id, task);
      return updatedTask;  // Retornamos la tarea actualizada
    } catch (error) {
      // Si ocurre un error, lanzamos una excepción HTTP con el mensaje de error y un estado 400 (Bad Request)
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Ruta para eliminar una tarea
  @Delete(':id')  // El parámetro :id es el identificador de la tarea que queremos eliminar
  delete(@Param('id') id: number) {
    return this.taskService.delete(id);  // Llamamos al servicio para eliminar la tarea con el id correspondiente
  }
}
