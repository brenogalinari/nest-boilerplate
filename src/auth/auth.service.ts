import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		private userService : UsersService,
		private jwtService : JwtService
		) {

	}

	async validateUser(email: string, password: string): Promise<any>{
		const user = await this.userService.findOne(email);
		const validPass = bcrypt.compare(password, user.password);
		if(user && validPass) {
			const {password, ... result} = user;
			return result;
		}
		return null;
	}

	async login (user : any) {
		const payload = { username: user.username, sub: user.userId };
		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}