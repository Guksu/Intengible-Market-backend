import { CommonOutPut } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
export declare class UserProfileInput {
    id: string;
}
export declare class UserProfileOutput extends CommonOutPut {
    user?: User;
}
