import { User } from './user.entity';
export declare class Transaction {
    id: number;
    description: string;
    type?: string;
    userId?: number;
    user: User;
    amount?: number;
    createdAt: Date;
    updatedAt: Date;
    toWalletAddress: string;
    fromWalletAddress: string;
    hash: string;
    logInfo: string;
    rarity?: string;
    tokenId?: number;
}
