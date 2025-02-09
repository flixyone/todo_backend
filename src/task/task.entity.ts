import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()  // Decorador que marca la clase como una entidad de base de datos
export class Task {
  @PrimaryGeneratedColumn()  // Decorador que indica que la propiedad 'id' es una columna primaria 
  id: number;

  @Column()  // Decorador que marca la propiedad 'title' como una columna en la base de datos
  title: string;

  @Column()  // Decorador que marca la propiedad 'description' como una columna en la base de datos
  description: string;

  @Column({ default: false })  // Decorador que marca la propiedad 'completed' como una columna en la base de datos, con valor predeterminado 'false'
  completed: boolean;
}
