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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const create_account_dto_1 = require("./dto/create-account.dto");
const delete_user_dto_1 = require("./dto/delete-user.dto");
const edit_profile_dto_1 = require("./dto/edit-profile.dto");
const login_dto_1 = require("./dto/login.dto");
const userProfile_dto_1 = require("./dto/userProfile.dto");
const user_entity_1 = require("./entitiy/user.entity");
const user_service_1 = require("./user.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async createAccount(createAccountInput) {
        return this.userService.craateAccount(createAccountInput);
    }
    async login(loginInput) {
        return this.userService.login(loginInput);
    }
    async userProfile(userProfileInput) {
        return this.userService.userProfile(userProfileInput);
    }
    async editProfile(user, editProfileInput) {
        return this.userService.editProfile(user, editProfileInput);
    }
    async deleteUser(user, delteUserInput) {
        return this.userService.deleteUser(user, delteUserInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => create_account_dto_1.CreateAccountOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createAccount", null);
__decorate([
    (0, graphql_1.Mutation)((type) => login_dto_1.LoginOutPut),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Query)((type) => userProfile_dto_1.UserProfileOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userProfile_dto_1.UserProfileInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userProfile", null);
__decorate([
    (0, graphql_1.Mutation)((type) => edit_profile_dto_1.EditProfileOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        edit_profile_dto_1.EditProfileInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editProfile", null);
__decorate([
    (0, graphql_1.Mutation)((type) => delete_user_dto_1.DeleteUserOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('Input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        delete_user_dto_1.DeleteUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map