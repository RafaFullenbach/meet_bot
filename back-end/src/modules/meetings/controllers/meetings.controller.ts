/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards, Request, Get, Delete, Param } from '@nestjs/common';
import { MeetingsService } from '../services/meetings.service';
import { MeetingsDTO } from '../dto/meetings.dto';
import { Meeting } from '../interfaces/meeting.interface';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Controller('meetings')
export class MeetingsController {
    constructor(private readonly meetingsService: MeetingsService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() newMeeting: MeetingsDTO, @Request() req): Promise<Meeting> {
        const user = req.user;

        return await this.meetingsService.createMeeting(newMeeting, user);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async index(@Request() req): Promise<Meeting[]> {
        const id = req.user._id;

        return await this.meetingsService.findMeeting(id);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') userId: string) {
        return await this.meetingsService.deleteMeeting(userId);
    }

}
