import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [
    TasksModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      database: 'nest',
      entities: ['dist/**/*.entity{.ts,.js'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
