import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersPramaDto } from './dto/get-users-prama.dto';
import { PatchUserDto } from './dto/patch-user.dto';

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
  public createUser(@Body() createUserDto: CreateUserDto){
    console.log(createUserDto);
    return `User created successfully ${JSON.stringify(createUserDto)}`;
  }


  //Patch /users/:id
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
