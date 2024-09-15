/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Meeting } from "../interfaces/meeting.interface";
import { Model } from "mongoose";
import { MeetingsDTO } from "../dto/meetings.dto";
import { UsersDTO } from "src/modules/users/dto/users.dto";
import * as moment from 'moment-timezone';

@Injectable()
export class MeetingsRepository {
    constructor(@InjectModel("meetings") private readonly userModel: Model<Meeting>) { }

    async createMeeting(newMeeting: MeetingsDTO, user: UsersDTO): Promise<Meeting> {
        const nowUTC = moment.utc();
        const nowLocal = nowUTC.tz('America/Sao_Paulo');

        const meetingCreated = new this.userModel({
            ...newMeeting,
            participants: [user],
            organizer: user,
            startTime: nowLocal
        });

       
        return meetingCreated.save();
    }
}