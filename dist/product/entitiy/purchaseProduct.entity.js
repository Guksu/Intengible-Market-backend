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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseProduct = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../user/entitiy/user.entity");
const typeorm_1 = require("typeorm");
let PurchaseProduct = class PurchaseProduct {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], PurchaseProduct.prototype, "purchaseProductNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], PurchaseProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], PurchaseProduct.prototype, "volume", void 0);
__decorate([
    (0, graphql_1.Field)((type) => user_entity_1.User),
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.User, (User) => User.PurchaseProduct, { cascade: true }),
    __metadata("design:type", user_entity_1.User)
], PurchaseProduct.prototype, "buyer", void 0);
PurchaseProduct = __decorate([
    (0, graphql_1.InputType)('PurchaseProductInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PurchaseProduct);
exports.PurchaseProduct = PurchaseProduct;
//# sourceMappingURL=purchaseProduct.entity.js.map