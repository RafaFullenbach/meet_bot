/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class MeetingsDTO {

    @IsNotEmpty()
    @IsString()
    readonly title: string;
}