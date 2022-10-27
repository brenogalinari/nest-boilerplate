import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Users extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  isACtive: boolean;
}