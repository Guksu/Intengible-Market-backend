import { User } from '../entitiy/user.entity';
declare const CreateAccountInput_base: import("@nestjs/common").Type<Pick<User, "id" | "password">>;
export declare class CreateAccountInput extends CreateAccountInput_base {
}
export declare class CreateAccountOutput {
    error?: string;
    ok: boolean;
}
export {};
