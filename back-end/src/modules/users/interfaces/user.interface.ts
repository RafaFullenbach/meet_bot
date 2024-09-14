/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface User extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly name: string,
    readonly password: string,
    readonly email: string
}