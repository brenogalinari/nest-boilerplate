import { IsEmail, IsNotEmpty } from "class-validator";


export class CreateUsersDto {

	@IsEmail()
	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	password: string;
}