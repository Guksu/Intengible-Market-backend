import { CommonOutPut } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
declare const EditProfileInput_base: import("@nestjs/common").Type<Partial<Pick<User, keyof User>>>;
export declare class EditProfileInput extends EditProfileInput_base {
    userNo: number;
}
export declare class EditProfileOutput extends CommonOutPut {
}
export {};
