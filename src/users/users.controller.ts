import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // users
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get() // users?role=admin
  findAll(@Query('role') role?: string) {
    return this.usersService.findAll(role);
  }

  /**
   * Here order of the route matters for routes @Get('interns') and @Get(':id')
   */

  @Get('interns') // users/interns
  findInterns() {
    return this.usersService.findInterns();
  }

  @Get(':id') // users/1234
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id') // users/1234
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id') // users/1234
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
