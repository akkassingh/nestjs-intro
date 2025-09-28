import { Controller } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    // inject PostsService
    private readonly postsService: PostsService,
  ) {}
}
