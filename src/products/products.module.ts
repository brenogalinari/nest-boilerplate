import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from "./products.controller";
import { Product } from "./products.model";
import { ProductService } from "./products.service";


@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}