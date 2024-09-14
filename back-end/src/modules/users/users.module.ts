/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from '../users/controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersRepository } from './repositories/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: "users", schema: UsersSchema}
  ])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersRepository]
})
export class UsersModule {}
