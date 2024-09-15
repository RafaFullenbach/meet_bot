/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingsModule } from './modules/meetings/meetings.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot("mongodb://localhost/meet-bot"), MeetingsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
