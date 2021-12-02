import { Strategy } from 'passport-jwt';
import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
declare const JwtStrategyTwo_base: new (...args: any[]) => Strategy;
export declare class JwtStrategyTwo extends JwtStrategyTwo_base {
    private readonly user;
    constructor(user: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
