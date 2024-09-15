/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Meeting extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly title: string;
    readonly participants: mongoose.Schema.Types.ObjectId[];
    readonly organizer: mongoose.Schema.Types.ObjectId;
    readonly startTime: Date;
}