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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
// this is need to be relative since after compile it will have different path: https://stackoverflow.com/questions/63865678/nestjs-test-suite-failed-to-run-cannot-find-module-src-article-article-entity
const transactions_entity_1 = require("./transactions.entity");
const hashs_entity_1 = require("./hashs.entity");
let User = User_1 = class User {
    // Entity Listener
    async setDefaultSponsor() {
        var _a;
        const parentId = (_a = this.sponsorId) !== null && _a !== void 0 ? _a : 1;
        const userParent = await (0, typeorm_1.getRepository)(User_1).findOne({ id: parentId });
        this.parent = userParent;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "walletAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "mgmTokenBalance", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "dailyMGMBalance", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "NoNFT" }),
    __metadata("design:type", String)
], User.prototype, "highestNFT", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "hiddenPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "numOfSponsor", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "usdtSpend", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "mgmPurchased", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "mlonPurchased", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactions_entity_1.Transaction, (transaction) => transaction.user),
    __metadata("design:type", Array)
], User.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => hashs_entity_1.Hash, (hash) => hash.user),
    __metadata("design:type", Array)
], User.prototype, "hashEth", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactions_entity_1.Transaction, (transaction) => transaction.user),
    __metadata("design:type", Array)
], User.prototype, "transactions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], User.prototype, "sponsorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], User.prototype, "sponsorerLine", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "numberOfLine", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "leadershipPower", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "totalUplineString", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "dailyUSDTamount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "usdtRewards", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "lockTransfer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "lockWithdrawMgm", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "mythicNFT", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "reservedNFT", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "mgmTokensForFiftyCent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "currentHashedRefreshToken", void 0);
__decorate([
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], User.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", User)
], User.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "setDefaultSponsor", null);
__decorate([
    (0, typeorm_1.Column)({ default: '0' }),
    __metadata("design:type", String)
], User.prototype, "mlonTokenBalance", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "mlonPurchasedV2", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "weeklyUSDTAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "lockWithdrawMlon", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'double' }),
    __metadata("design:type", Number)
], User.prototype, "mlonTokensForFiftyCent", void 0);
User = User_1 = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Tree)('materialized-path')
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3VzZXIuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FZaUI7QUFDakIsME1BQTBNO0FBQzFNLCtEQUFvRDtBQUNwRCxpREFBc0M7QUFJdEMsSUFBYSxJQUFJLFlBQWpCLE1BQWEsSUFBSTtJQStHZixrQkFBa0I7SUFFbEIsS0FBSyxDQUFDLGlCQUFpQjs7UUFDckIsTUFBTSxRQUFRLEdBQUcsTUFBQSxJQUFJLENBQUMsU0FBUyxtQ0FBSSxDQUFDLENBQUM7UUFFckMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFBLHVCQUFhLEVBQUMsTUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDM0IsQ0FBQztDQWlCRixDQUFBO0FBcklDO0lBREMsSUFBQSxnQ0FBc0IsR0FBRTs7Z0NBQ0w7QUFHcEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNQO0FBR25CO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDUjtBQUdsQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ0g7QUFHdEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7NkNBQ2Q7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7NkNBQ2Q7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxP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