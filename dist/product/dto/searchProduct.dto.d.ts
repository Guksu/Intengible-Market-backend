import { CommonOutPut } from 'src/common/dto/output.dto';
import { Product } from '../entitiy/product.entity';
declare const SearchProductInput_base: import("@nestjs/common").Type<Pick<Product, "name">>;
export declare class SearchProductInput extends SearchProductInput_base {
}
export declare class SearchProductOutput extends CommonOutPut {
    product?: Product[];
}
export {};
