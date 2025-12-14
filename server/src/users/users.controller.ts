import {Controller, Get, Post} from '@nestjs/common';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create() {
    console.log('create user');
  }

  @Get()
  async getAll() {
    console.log('get users');
  }
}
