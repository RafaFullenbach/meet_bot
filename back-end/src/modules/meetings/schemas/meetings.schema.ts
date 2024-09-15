/* eslint-disable prettier/prettier */
import { Schema } from "mongoose"

export const MeetingsSchema = new Schema({
    title: String,
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    organizer: { type: Schema.Types.ObjectId, ref: 'User'},
    startTime: Date,
});