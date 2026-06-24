import jwt from 'jsonwebtoken';

export class TokenUtils {
  static generateToken(user: any) {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  }
  static verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
  }
}