/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[JwtModule.register({
    secret: "5d124faa88c0c9b9c08c074c85983880b3f1",
    signOptions: { expiresIn: "1d"},
  }), UsersModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
