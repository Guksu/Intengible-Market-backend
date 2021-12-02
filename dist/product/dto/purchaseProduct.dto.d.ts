import { CommonOutPut } from 'src/common/dto/output.dto';
import { PurchaseProduct } from '../entitiy/purchaseProduct.entity';
declare const PurchaseProductInput_base: import("@nestjs/common").Type<Omit<PurchaseProduct, "purchaseProductNo" | "buyer">>;
export declare class PurchaseProductInput extends PurchaseProductInput_base {
}
export declare class PurchaseProductOutput extends CommonOutPut {
}
export {};
