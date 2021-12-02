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
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entitiy/user.entity");
let UserService = class UserService {
    constructor(user, jwtService) {
        this.user = user;
        this.jwtService = jwtService;
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
    async userProfile({ id }) {
        try {
            const user = await this.user.findOneOrFail({ id });
            return { ok: true, user };
        }
        catch (error) {
            return { ok: false, error: 'Profile is somthing wrong' };
        }
    }
    async editProfile({ password, userNo, }) {
        try {
            const user = await this.user.findOne(userNo);
            if (password) {
                user.password = password;
            }
            await this.user.save(user);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: "Can't edit your profile. Try again" };
        }
    }
    async deleteUser({ id, password, }) {
        try {
            const delteCheckId = await this.user.findOne({ id }, { select: ['password'] });
            const deleteCheckPassword = await delteCheckId.checkPassword(password);
            if (!delteCheckId) {
                return { ok: false, error: "Check again you'r ID" };
            }
            if (!deleteCheckPassword) {
                return { ok: false, error: "Check again you'r Password" };
            }
            await this.user.delete(delteCheckId);
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
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map