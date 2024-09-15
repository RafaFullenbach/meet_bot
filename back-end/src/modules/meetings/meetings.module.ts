/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MeetingsController } from './controllers/meetings.controller';
import { MeetingsService } from './services/meetings.service';
import { MeetingsRepository } from './repositories/meetings.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingsSchema } from './schemas/meetings.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: "meetings", schema: MeetingsSchema}
  ])],
  controllers: [MeetingsController],
  providers: [MeetingsService, MeetingsRepository]
})
export class MeetingsModule {}
