import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  description: string;

  @Column({ default: null })
  type?: string;

  @Column({ default: null })
  userId?: number;

  @ManyToOne(() => User, (user) => user.transaction)
  user: User;

  @Column({ type: 'double', default: null })
  amount?: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ default: '-' })
  toWalletAddress: string;

  @Column({ default: '-' })
  fromWalletAddress: string;

  @Column({ default: '-' })
  hash: string;

  @Column({ default: '-' })
  logInfo: string;

  // this is NFTType
  @Column({ default: null })
  rarity?: string;

  // tokenId for NFT
  @Column({ default: null })
  tokenId?: number;
}
