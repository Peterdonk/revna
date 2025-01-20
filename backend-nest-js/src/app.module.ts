import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'work',
      database: 'revna',
      entities: [User],
      synchronize: true, // Set to false in production
    }),
    UsersModule,
  ],
})
export class AppModule {}
