/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersDTO } from "../dto/users.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../interfaces/user.interface";

@Injectable()
export class UsersRepository {

    constructor(
        @InjectModel("users") private readonly userModel: Model<User>
    ) { }

    async createUser(newUser: UsersDTO): Promise<UsersDTO> {
        const savedUser = new this.userModel(newUser);
        return await savedUser.save();
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.userModel.findOne({email}).exec();
    }
}
