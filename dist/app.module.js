"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/entitiy/user.entity");
const user_module_1 = require("./user/user.module");
const product_module_1 = require("./product/product.module");
const product_entity_1 = require("./product/entitiy/product.entity");
const purchaseProduct_entity_1 = require("./product/entitiy/purchaseProduct.entity");
const auth_module_1 = require("./auth/auth.module");
const upload_module_1 = require("./upload/upload.module");
require('dotenv').config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: process.env.PASSWORD,
                database: 'intengible-market',
                entities: [user_entity_1.User, product_entity_1.Product, purchaseProduct_entity_1.PurchaseProduct],
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                context: ({ req, connection }) => {
                    if (req) {
                        const user = req.headers.authorization;
                        return Object.assign(Object.assign({}, req), { user });
                    }
                    else {
                        return connection;
                    }
                },
            }),
            user_module_1.UserModule,
            product_module_1.ProductModule,
            auth_module_1.AuthModule,
            upload_module_1.UploadModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map