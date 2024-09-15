/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MeetingsRepository } from '../repositories/meetings.repository';
import { MeetingsDTO } from '../dto/meetings.dto';
import { Meeting } from '../interfaces/meeting.interface';
import { UsersDTO } from 'src/modules/users/dto/users.dto';

@Injectable()
export class MeetingsService {
    constructor(private readonly meetingsRepository: MeetingsRepository){}

    async createMeeting(newMeeting: MeetingsDTO, user:UsersDTO): Promise<Meeting>{
        return await this.meetingsRepository.createMeeting(newMeeting, user);
    }
}
