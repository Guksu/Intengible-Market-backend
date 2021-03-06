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
exports.GetProductOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const product_entity_1 = require("../entitiy/product.entity");
let GetProductOutput = class GetProductOutput extends output_dto_1.CommonOutPut {
};
__decorate([
    (0, graphql_1.Field)((type) => [product_entity_1.Product], { nullable: true }),
    __metadata("design:type", Array)
], GetProductOutput.prototype, "product", void 0);
GetProductOutput = __decorate([
    (0, graphql_1.ObjectType)()
], GetProductOutput);
exports.GetProductOutput = GetProductOutput;
//# sourceMappingURL=searchProduct.dto.js.map