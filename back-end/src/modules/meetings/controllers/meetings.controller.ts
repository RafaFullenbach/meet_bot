/* eslint-disable prettier/prettier */
import {  Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { MeetingsService } from '../services/meetings.service';
import { MeetingsDTO } from '../dto/meetings.dto';
import { Meeting } from '../interfaces/meeting.interface';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Controller('meetings')
export class MeetingsController {
    constructor(private readonly meetingsService: MeetingsService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() newMeeting: MeetingsDTO, @Request() req):Promise<Meeting>{
        const user = req.user;

        return await this.meetingsService.createMeeting(newMeeting, user);
    }
}
