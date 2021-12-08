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
exports.ProductResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const user_entity_1 = require("../user/entitiy/user.entity");
const purchaseProduct_dto_1 = require("./dto/purchaseProduct.dto");
const registerProduct_dto_1 = require("./dto/registerProduct.dto");
const getProduct_dto_1 = require("./dto/getProduct.dto");
const product_service_1 = require("./product.service");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    async registerProduct(user, registerProductInput) {
        return this.productService.registerProduct(user, registerProductInput);
    }
    async purchaseProduct(user, purchaseProductInput) {
        return this.productService.purchaseProduct(user, purchaseProductInput);
    }
    async getProduct() {
        return this.productService.getProduct();
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => registerProduct_dto_1.RegisterProductOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        registerProduct_dto_1.RegisterProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "registerProduct", null);
__decorate([
    (0, graphql_1.Mutation)((type) => purchaseProduct_dto_1.PurchaseProductOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        purchaseProduct_dto_1.PurchaseProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "purchaseProduct", null);
__decorate([
    (0, graphql_1.Query)((type) => getProduct_dto_1.GetProductOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map