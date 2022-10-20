import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Product extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  cod: string;

  @Column
  description: string;

  @Column
  value: number;
}
