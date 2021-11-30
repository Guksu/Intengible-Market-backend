"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseProductOutput = exports.PurchaseProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const purchaseProduct_entity_1 = require("../entitiy/purchaseProduct.entity");
let PurchaseProductInput = class PurchaseProductInput extends (0, graphql_1.OmitType)(purchaseProduct_entity_1.PurchaseProduct, [
    'purchaseProductNo',
]) {
};
PurchaseProductInput = __decorate([
    (0, graphql_1.InputType)()
], PurchaseProductInput);
exports.PurchaseProductInput = PurchaseProductInput;
let PurchaseProductOutput = class PurchaseProductOutput extends output_dto_1.CommonOutPut {
};
PurchaseProductOutput = __decorate([
    (0, graphql_1.ObjectType)()
], PurchaseProductOutput);
exports.PurchaseProductOutput = PurchaseProductOutput;
//# sourceMappingURL=purchaseProduct.dto.js.map