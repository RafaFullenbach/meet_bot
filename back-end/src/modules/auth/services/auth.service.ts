/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDTO } from '../dto/auth.dto';
import { UsersRepository } from 'src/modules/users/repositories/users.repository';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UsersRepository,
        private readonly jwtService: JwtService
    ) { }

    async createSession(newSession: AuthDTO): Promise<any> {
        const { email, password } = newSession;

        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException("E-mail e/ou senha incorreta");
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new UnauthorizedException("E-mail e/ou senha incorreta");
        }

        const payload = { user: user, sub: user._id }
        const token = this.jwtService.sign(payload)

        return {
            access_token: token,
            userId: user._id
        };
    }
}
