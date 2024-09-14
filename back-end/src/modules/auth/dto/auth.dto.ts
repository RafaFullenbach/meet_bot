/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";

export class AuthDTO {
    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}