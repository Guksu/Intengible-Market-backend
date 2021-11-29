import { CommonOutPut } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
export declare class UserProfileInput {
    userNo: number;
}
export declare class UserProfileOutput extends CommonOutPut {
    user?: User;
}
