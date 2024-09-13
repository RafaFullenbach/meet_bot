/* eslint-disable prettier/prettier */
import { Schema } from "mongoose"

export const UsersSchema = new Schema({
    name: String,
    password: String,
    email: String
})