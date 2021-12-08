import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from '../entitiy/product.entity';
export declare class GetProductOutput extends CommonOutPut {
    product?: Product[];
}
