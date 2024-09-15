/* eslint-disable prettier/prettier */
import { UsersRepository } from 'src/modules/users/repositories/users.repository';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "5d124faa88c0c9b9c08c074c85983880b3f1"
        });
    }

    async validate(payload: any) {
        const user = await this.usersRepository.findById(payload.sub);

        if (!user) {
            throw new UnauthorizedException("Usuário não encontrado");
        }

        return user;
    }
}