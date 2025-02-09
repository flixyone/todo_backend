import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],  // Importa el módulo de TypeORM para la entidad 'Task'
  providers: [TaskService],  
  controllers: [TaskController],  // Controlador 'TaskController' para manejar las rutas de la API
})
export class TaskModule {}
