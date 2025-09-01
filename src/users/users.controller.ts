import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params.id);
    console.log(query.limit);
    return `List of users under id: ${params.id} and limit: ${query.limit}`;
  }
  @Post()
  public createUser(@Body() request: any) {
    console.log(request);
    return 'User created!';
  }
}
