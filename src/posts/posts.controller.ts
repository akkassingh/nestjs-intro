import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    // inject PostsService
    private readonly postsService: PostsService,
  ) {}

  // define endpoints (CRUD)
  // GET /posts/:userId
  @Get('{/:userId}') // making parameter optional by adding {}
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
}
