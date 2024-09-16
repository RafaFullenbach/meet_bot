/* eslint-disable prettier/prettier */
import { Meeting } from './../interfaces/meeting.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { MeetingsRepository } from '../repositories/meetings.repository';
import { MeetingsDTO } from '../dto/meetings.dto';
import { UsersDTO } from 'src/modules/users/dto/users.dto';
import { NotFoundError, retry } from 'rxjs';

@Injectable()
export class MeetingsService {
    constructor(private readonly meetingsRepository: MeetingsRepository) { }

    async createMeeting(newMeeting: MeetingsDTO, user: UsersDTO): Promise<Meeting> {
        return await this.meetingsRepository.createMeeting(newMeeting, user);
    }

    async findMeeting(organizerId): Promise<Meeting[]> {
        return await this.meetingsRepository.findMeeting(organizerId);
    }

    async deleteMeeting(userId: string) {
        return await this.meetingsRepository.deleteMeeting(userId);
    }
}
