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
exports.User = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const product_entity_1 = require("../../product/entitiy/product.entity");
const purchaseProduct_entity_1 = require("../../product/entitiy/purchaseProduct.entity");
let User = class User {
    async hashPassword() {
        if (this.password) {
            try {
                this.password = await bcrypt.hash(this.password, 10);
            }
            catch (error) {
                console.log(error);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async checkPassword(checkPassword) {
        try {
            return await bcrypt.compare(checkPassword, this.password);
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], User.prototype, "userNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [product_entity_1.Product], { nullable: true }),
    (0, typeorm_1.OneToMany)((type) => product_entity_1.Product, (Product) => Product.seller, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], User.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [purchaseProduct_entity_1.PurchaseProduct]),
    (0, typeorm_1.OneToMany)((type) => purchaseProduct_entity_1.PurchaseProduct, (PurchaseProduct) => PurchaseProduct.buyer, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "PurchaseProduct", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, graphql_1.InputType)('UserInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map