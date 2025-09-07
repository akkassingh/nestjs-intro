import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersPramaDto } from './dto/get-users-prama.dto';

@Controller('users')
export class UsersController {
  @Get('/{:id}') // making parameter optional by adding {}
  public getUsers(
    @Param() getUsersPramaDto: GetUsersPramaDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number | undefined,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number | undefined,
  ) {
    console.log(getUsersPramaDto);
    return `you sent a get request to users with id: ${JSON.stringify(getUsersPramaDto)}, limit: ${limit}, page: ${page}`;
  }


  // POST /users
  @Post()
  public createUser(@Body() CreateUserDto: CreateUserDto){
    console.log(CreateUserDto);
    return `User created successfully ${JSON.stringify(CreateUserDto)}`;
  }
}
