import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get('/{:id}') // making parameter optional by adding {}
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number | undefined,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number | undefined,
  ) {
    console.log(id);
    console.log(limit);
    console.log(page);
    return `you sent a get request to users with id: ${id} and limit: ${limit} and page: ${page}`;
  }
  @Post()
  public createUser(@Body() CreateUserDto: CreateUserDto){
    console.log(CreateUserDto);
    return `User created successfully ${JSON.stringify(CreateUserDto)}`;
  }
}
