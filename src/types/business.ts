export interface SourceInfo {
  id: string;
  value: string;
}

export interface SourceItemInfo {
  value: string;
  order: number;
}

export enum BusinessType {
  INCOME = '收入',
  EXPENDITURE = '支出'
}

export interface BankRecord {
  id: string; // 唯一id，month_xxxx
  card: string; // 卡号
  name: string; // 工商银行，招商等
  date: string; // 日期，当年和跨年 2021-06-21 11:18
  type: string; // 交易类型 收入和支出
  purpose: string; // 用途
  app: string; // 支付宝，京东，滴滴等
  amount: number; // 消费或者收入金额
  balance: number; // 余额
  [key: string]: string | number;
}

export interface BankCard extends BankRecord {
  id: string; // 主健，bank_id
  blob: string; // 原始信息，展示的时候不需要
}
