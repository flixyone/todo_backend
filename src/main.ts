import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // Crea la aplicación NestJS usando el AppModule

  // Habilitar CORS 
  app.enableCors({
    origin: 'http://localhost:4321',  // para hacer peticiones al frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos definidos
    allowedHeaders: ['Content-Type'],  
  });

  await app.listen(3000);  // La aplicación escucha en el puerto 3000
}
bootstrap();  // Llama a la función bootstrap para iniciar la aplicación
