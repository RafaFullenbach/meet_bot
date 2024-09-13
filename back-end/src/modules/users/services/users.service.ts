/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersDTO } from '../dto/users.dto';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {

  constructor(
    private readonly userRepository : UsersRepository
  ){}

  async createUser(newUser: UsersDTO): Promise<UsersDTO> {
    return await this.userRepository.createUser(newUser);
  }
}
