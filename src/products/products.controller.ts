import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Product } from "./products.model";
import { ProductService } from "./products.service";


@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param() params): Promise<Product> {
    return await this.productService.findOne(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body) {
    return await this.productService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body() body) {
    return await this.productService.update(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param() params) {
    await this.productService.delete(params.id);
  }
}