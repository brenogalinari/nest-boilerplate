import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
	private readonly users = [
		{
			name: 'Breno',
			email: 'breno.galinari@gmail.com',
			password: '12345'
		},
		{
			name: 'root',
			email: 'root@nest.com',
			password: '12345'
		}
	];

	async findOne(email: string): Promise<User | undefined>{
		return this.users.find(user => user.email == email);
	}
}