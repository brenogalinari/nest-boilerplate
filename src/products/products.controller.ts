import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { Product } from "./products.model";
import { ProductService } from "./products.service";


@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductService){

  }

  @Get()
  async getAll(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @Get(':id')
  async findById(@Param() params): Promise<Product> {
	return await this.productService.findOne(params.id);
  }

  @Post()
  async create(@Body() body) {
	return await this.productService.create(body);
  }

  @Put()
  async update(@Body() body) {
	return await this.productService.update(body);
  }

  @Delete(':id')
  async delete(@Param() params) {
	await this.productService.delete(params.id);
  }
}