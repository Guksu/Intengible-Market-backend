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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const purchaseProduct_dto_1 = require("../product/dto/purchaseProduct.dto");
const product_entity_1 = require("../product/entitiy/product.entity");
const purchaseProduct_entity_1 = require("../product/entitiy/purchaseProduct.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entitiy/user.entity");
let UserService = class UserService {
    constructor(user, jwtService, product, purchaseProduct) {
        this.user = user;
        this.jwtService = jwtService;
        this.product = product;
        this.purchaseProduct = purchaseProduct;
    }
    async craateAccount({ id, password, }) {
        try {
            const exists = await this.user.findOne({ id });
            if (exists) {
                return { ok: false, error: 'Id is already exist' };
            }
            await this.user.save(this.user.create({ id, password }));
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async login({ id, password }) {
        try {
            const loginUser = await this.user.findOne({ id }, { select: ['password'] });
            if (!loginUser) {
                return { ok: false, error: "User doesn't exist" };
            }
            const checkPassword = await loginUser.checkPassword(password);
            if (!checkPassword) {
                return { ok: false, error: 'Password is wrong. Try again' };
            }
            const payload = { id };
            const accessToken = await this.jwtService.sign(payload);
            return { ok: true, token: accessToken };
        }
        catch (error) {
            return {
                ok: false,
                error: error,
            };
        }
    }
    async userProductList(user) {
        try {
            const checkProduct = await this.product.find({
                seller: user['user'],
            });
            return {
                ok: true,
                product: checkProduct,
            };
        }
        catch (error) {
            return { ok: false, error: 'ProductList Error' };
        }
    }
    async userPurchaseProductList(user) {
        try {
            const checkProduct = await this.purchaseProduct.find({
                buyer: user['user'],
            });
            return {
                ok: true,
                purchaseProduct: checkProduct,
            };
        }
        catch (error) {
            return { ok: false, error: 'PurchaseProductList Error' };
        }
    }
    async editProfile(user, { newPassword }) {
        try {
            const checkUser = await this.user.findOne(user['user'].userNo);
            if (checkUser) {
                checkUser.password = newPassword;
            }
            await this.user.save(checkUser);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: "Can't edit your profile. Try again" };
        }
    }
    async deleteUser(user, { id, password }) {
        try {
            const delteCheckUser = await this.user.findOne(user['user'].userNo);
            const deleteCheckPassword = await delteCheckUser.checkPassword(password);
            if (id != delteCheckUser.id) {
                return { ok: false, error: 'Check again' };
            }
            if (!deleteCheckPassword) {
                return { ok: false, error: "Check again you'r Password" };
            }
            await this.user.delete(delteCheckUser);
            return { ok: true };
        }
        catch (error) {
            return {
                ok: false,
                error: error,
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(purchaseProduct_entity_1.PurchaseProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map