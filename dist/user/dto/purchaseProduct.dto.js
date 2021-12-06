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
exports.PurchaseProductListOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const purchaseProduct_entity_1 = require("../../product/entitiy/purchaseProduct.entity");
let PurchaseProductListOutput = class PurchaseProductListOutput extends output_dto_1.CommonOutPut {
};
__decorate([
    (0, graphql_1.Field)((type) => [purchaseProduct_entity_1.PurchaseProduct], { nullable: true }),
    __metadata("design:type", Array)
], PurchaseProductListOutput.prototype, "purchaseProduct", void 0);
PurchaseProductListOutput = __decorate([
    (0, graphql_1.ObjectType)()
], PurchaseProductListOutput);
exports.PurchaseProductListOutput = PurchaseProductListOutput;
//# sourceMappingURL=purchaseProduct.dto.js.map