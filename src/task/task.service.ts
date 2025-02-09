import { Injectable } from '@nestjs/common';
import { Task } from './task.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)  // Inyecta el repositorio de la entidad Task
    private readonly taskRepository: Repository<Task>,
  ) {}

  // Método para obtener todas las tareas
  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();  // Obtiene todas las tareas de la base de datos
  }

  // Método para crear una nueva tarea
  async create(title: string, description: string): Promise<Task> {
    const task = new Task();
    task.title = title;
    task.description = description;
    task.completed = false; // Por defecto, las tareas no están completadas
    return this.taskRepository.save(task);  // Guarda la tarea en la base de datos
  }

  async update(id: number, task: Partial<Task>): Promise<Task> {
    const existingTask = await this.taskRepository.findOne({ where: { id } });
    if (!existingTask) {
      throw new Error('Task not found');  // Lanza error si la tarea no existe
    }
  
    // Actualiza los campos si están presentes
    existingTask.title = task.title ?? existingTask.title;
    existingTask.description = task.description ?? existingTask.description;
    existingTask.completed = task.completed ?? existingTask.completed;
  
    // Guarda la tarea actualizada
    return this.taskRepository.save(existingTask);
  }

  // Método para eliminar una tarea
  async delete(id: number): Promise<void> {
    const task = await this.taskRepository.findOne({ where: { id } });  // Busca la tarea por ID
    if (!task) {
      throw new Error('Task not found');  // Lanza error si la tarea no existe
    }
    await this.taskRepository.remove(task);  // Elimina la tarea de la base de datos
  }
}
