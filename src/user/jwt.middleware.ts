import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserService } from './user.service';
require('dotenv').config();

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers) {
      const token = req.headers['x-jwt'];

      try {
        const decoded = jwt.verify(token.toString(), process.env.TOKEN_KEY);
        if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
          const { user, ok } = await this.userService.userProfile(
            decoded['id'],
          );
          if (ok) {
            req['user'] = user;
          }
        }
      } catch (error) {}
    }
    next();
  }
}
