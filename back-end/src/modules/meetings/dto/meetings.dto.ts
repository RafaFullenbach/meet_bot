/* eslint-disable prettier/prettier */
// import { Type } from "class-transformer";
// import { ArrayMinSize, IsDate, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from "class-validator";
// import { UsersDTO } from "src/modules/users/dto/users.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class MeetingsDTO {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    // @IsNotEmpty()
    // @Type(() => UsersDTO)
    // @ArrayMinSize(1)
    // @IsNotEmptyObject()
    // @ValidateNested({ each : true })
    // readonly participants: UsersDTO[];

    // @IsNotEmpty()
    // @Type(() => UsersDTO)
    // @ValidateNested()
    // readonly organizer: UsersDTO;

    // @IsNotEmpty()
    // @IsDate()
    // readonly startTime: Date;
}