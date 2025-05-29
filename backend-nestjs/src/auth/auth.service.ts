import { UserDocument } from '../users/schemas/user.schema';

async login(user: UserDocument) {
  const { password, ...result } = user.toObject(); // ✅ Funciona ahora
  return {
    access_token: this.jwtService.sign({ email: user.email, sub: user._id, role: user.role }),
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  };
}
