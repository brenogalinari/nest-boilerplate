import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./users.model";
import * as bcrypt from 'bcrypt';


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

	async store(userParams) {
		const passHashed = await bcrypt.hash(userParams.password, 10).then(hashed => hashed); 
		return await this.usersModel.create({
			username: userParams.username,
			password: passHashed,
			isActive: true,
		});
	}
}