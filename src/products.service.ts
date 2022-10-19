import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";
import { InjectModel } from "@nestjs/sequelize"

@Injectable()
export class ProductService {

	constructor(
		@InjectModel(Product)
		private productModel: typeof Product
	){
		
	}

	async create(product){
		return await this.productModel.create(product);
	}

	async getAll() : Promise<Product[]>{
		return await this.productModel.findAll();
	}

	async findOne(id): Promise<Product> {
		return await this.productModel.findByPk(id);
	}

	async update(product) {
		return await this.productModel.update(product, {
			where: {
				id: product.id
			}
		});
	}

	async delete(id) {
		const found = await this.findOne(id);
		found.destroy();
	}
}