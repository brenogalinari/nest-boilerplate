import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./users.model";


@Injectable()
export class UsersService {

	constructor(@InjectModel(Users) private usersModel: typeof Users) {}

	async findOne(email: string): Promise<Users | undefined>{
		return await this.usersModel.findOne({
			where: {
				username: email
			}
		});
	}
}