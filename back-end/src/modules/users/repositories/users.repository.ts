/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersDTO } from "../dto/users.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Users } from "../interfaces/users.interface";

@Injectable()
export class UsersRepository {

    constructor(
        @InjectModel("users") private readonly userModel: Model<Users>
    ) { }

    async createUser(newUser: UsersDTO): Promise<UsersDTO> {
        const savedUser = new this.userModel(newUser);
        return await savedUser.save();
    }

}