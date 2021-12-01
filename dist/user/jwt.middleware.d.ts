import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
export declare class JwtMiddleware implements NestMiddleware {
    private readonly userService;
    constructor(userService: UserService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
