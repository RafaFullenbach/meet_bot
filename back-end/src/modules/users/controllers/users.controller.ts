/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersDTO } from '../dto/users.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() newUser: UsersDTO): Promise<UsersDTO> {
    return await this.usersService.createUser(newUser);
  }
}
