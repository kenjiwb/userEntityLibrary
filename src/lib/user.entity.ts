import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  TreeChildren,
  TreeParent,
  Tree,
  BeforeInsert,
  getRepository,
} from 'typeorm';
// this is need to be relative since after compile it will have different path: https://stackoverflow.com/questions/63865678/nestjs-test-suite-failed-to-run-cannot-find-module-src-article-article-entity
import { Transaction } from './transactions.entity';
import { Hash } from './hashs.entity';

@Entity()
@Tree('materialized-path')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ default: null })
  firstName?: string;

  @Column({ default: null })
  lastName?: string;

  @Column({ unique: true })
  walletAddress: string;

  @Column({ default: 0, type: 'double' })
  mgmTokenBalance?: number;

  @Column({ default: 0, type: 'double' })
  dailyMGMBalance?: number;

  @Column({ default: "NoNFT" })
  highestNFT?: string;

  @Column({ default: 0 })
  tokenId?: number;

  @Column({ type: 'boolean', default: false })
  hiddenPercentage?: boolean;

  @Column({ default: 0 })
  numOfSponsor?: number;

  @Column({ default: 1 })
  isActive?: number;

  @Column({ default: 0 })
  usdtSpend: number;

  @Column({ default: 0, type: 'double' })
  mgmPurchased?: number;

  @Column({ default: 0, type: 'double' })
  readonly mlonPurchased: number;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  readonly transaction?: Transaction[];

  @OneToMany(() => Hash, (hash) => hash.user)
  hashEth?: Hash[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions?: Transaction[];

  @Column({ default: null })
  referralCode?: string;

  @Column({ default: 1 })
  sponsorId?: number;

  @Column({ default: null })
  sponsorerLine?: number;

  @Column({ default: 0 })
  numberOfLine?: number;

  @Column({ default: 0 })
  leadershipPower: number;

  @Column({ default: null })
  totalUplineString: string;

  @Column({ default: 0 })
  dailyUSDTamount?: number;

  @Column({ default: 0 })
  usdtRewards: number;

  @Column({ type: 'boolean', default: false })
  lockTransfer: boolean;

  @Column({ type: 'boolean', default: false })
  lockWithdrawMgm?: boolean;

  @Column({ default: null })
  hash: string;

  @Column({ default: 0 })
  mythicNFT: number;

  @Column({ default: false })
  reservedNFT: boolean;

  @Column({ default: 0, type: 'double' })
  mgmTokensForFiftyCent?: number;

  @Column({
    nullable: true,
  })
  public currentHashedRefreshToken?: string;

  @TreeChildren()
  children: User[];

  @TreeParent()
  parent: User;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  // Entity Listener
  @BeforeInsert()
  async setDefaultSponsor() {
    const parentId = this.sponsorId ?? 1;

    const userParent = await getRepository(User).findOne({ id: parentId });
    this.parent = userParent;
  }

  @Column({ default: '0' })
  mlonTokenBalance?: string;

  @Column({ default: 0, type: 'double' })
  mlonPurchasedV2?: number;

  // update name dailyUSDTamount to weeklyUSDTAmount
  @Column({ default: 0 })
  weeklyUSDTAmount?: number;

  @Column({ type: 'boolean', default: false })
  lockWithdrawMlon?: boolean;

  @Column({ default: 0, type: 'double' })
  mlonTokensForFiftyCent?: number;
}
