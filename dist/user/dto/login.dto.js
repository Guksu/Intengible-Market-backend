"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOutPut = exports.LoginInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const input_dto_1 = require("../../common/dto/input.dto");
const output_dto_1 = require("../../common/dto/output.dto");
let LoginInput = class LoginInput extends input_dto_1.CommonInput {
};
LoginInput = __decorate([
    (0, graphql_1.InputType)()
], LoginInput);
exports.LoginInput = LoginInput;
let LoginOutPut = class LoginOutPut extends output_dto_1.CommonOutPut {
};
LoginOutPut = __decorate([
    (0, graphql_1.ObjectType)()
], LoginOutPut);
exports.LoginOutPut = LoginOutPut;
//# sourceMappingURL=login.dto.js.map