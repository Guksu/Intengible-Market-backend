import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from '../entitiy/product.entity';
declare const RegisterProductInput_base: import("@nestjs/common").Type<Omit<Product, "productNo">>;
export declare class RegisterProductInput extends RegisterProductInput_base {
}
export declare class RegisterProductOutput extends CommonOutPut {
}
export {};
