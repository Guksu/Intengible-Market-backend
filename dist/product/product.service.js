"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entitiy/product.entity");
const purchaseProduct_entity_1 = require("./entitiy/purchaseProduct.entity");
let ProductService = class ProductService {
    constructor(product, purchase) {
        this.product = product;
        this.purchase = purchase;
    }
    async registerProduct({ name, price, description, volume, seller, }) {
        try {
            const exists = await this.product.findOne({ name });
            if (exists) {
                return { ok: false, error: 'Product name is already exist.' };
            }
            const newProduct = this.product.create({
                name,
                price,
                description,
                volume,
                seller,
            });
            await this.product.save(newProduct);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async purchaseProduct({ name, volume, buyer, }) {
        try {
            const checkProduct = await this.product.findOne({ name });
            if (checkProduct.nowVolume === 0) {
                return { ok: false, error: 'This Product is sold out!' };
            }
            else {
                checkProduct.nowVolume -= volume;
                await this.product.save(checkProduct);
            }
            await this.purchase.save(this.purchase.create({ name, volume, buyer }));
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(purchaseProduct_entity_1.PurchaseProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map