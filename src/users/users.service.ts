import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
	private readonly users = [
		{
			id: 1,
			name: 'Breno',
			email: 'breno.galinari@gmail.com',
			password: '12345'
		},
		{
			id: 2,
			name: 'root',
			email: 'root@nest.com',
			password: '12345'
		}
	];

	async findOne(email: string): Promise<User | undefined>{
		return this.users.find(user => user.email == email);
	}
}