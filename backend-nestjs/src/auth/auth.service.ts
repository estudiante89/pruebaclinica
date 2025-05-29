import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserDocument } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: UserDocument) {
    const { password, ...result } = user.toObject();
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user._id,
        role: user.role,
      }),
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    };
  }

  async comparePasswords(plainText: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashed);
  }
}
