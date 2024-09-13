/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UsersDTO {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;
}