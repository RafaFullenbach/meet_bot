/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { UsersDTO } from '../dto/users.dto';
import { UsersRepository } from '../repositories/users.repository';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    private readonly userRepository : UsersRepository
  ){}

  async createUser(newUser: UsersDTO): Promise<UsersDTO> {
    const checkUserExists = await this.userRepository.findByEmail(newUser.email);

    if(checkUserExists) {
      throw new ConflictException("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(newUser.password, 8);

    const userCreated = {
      ...newUser,
      password: hashedPassword,
    }

    return await this.userRepository.createUser(userCreated);
  }
}
