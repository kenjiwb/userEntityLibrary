import { User } from './user.entity';
export declare class Hash {
    id: number;
    user: User;
    hashTransaction: string;
    status?: string;
    type?: string;
    userWallet: string;
    userId?: number;
    amount?: number;
    createdAt: Date;
    updatedAt: Date;
}
