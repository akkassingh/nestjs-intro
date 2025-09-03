import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/{:id}') // making parameter optional by adding {}
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id);
    console.log(id);
    return `you sent a get request to users with id: ${id} and limit: ${limit}`;
  }
  @Post()
  public createUser(@Body() request: any) {
    console.log(request);
    return 'User created!';
  }
}
