import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'flixy',
      database: 'todo_app',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
