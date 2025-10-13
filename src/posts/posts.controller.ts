import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostsDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
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

  @ApiOperation({ summary: 'Creates a new post' })
  @ApiResponse({
    status: 201,
    description: 'The post has been created.',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }

  @ApiOperation({ summary: 'Updates existing blog post' })
  @ApiResponse({
    status: 200,
    description: 'You get a 200 if the post is updated successfully.',
  })
  @Patch('/:id')
  public updatePost(@Body() patchPostsDto: PatchPostsDto) {
    console.log('update post', patchPostsDto);
  }
}
