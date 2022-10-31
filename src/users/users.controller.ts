import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor(private usersService : UsersService){

	}

	@Post('/create')
	async create(@Body() body : CreateUsersDto) {
		return await this.usersService.store(body);
	}
}
